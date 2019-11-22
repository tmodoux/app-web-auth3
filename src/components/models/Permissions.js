// @flow

import AppError from './AppError.js';

import type {Stream} from './Pryv.js';

type Permission = {
  streamId?: string,
  concept?: {
    value: string,
    type: string,
  },
  level: 'read'|'contribute'|'manage',
  defaultName: ?string,
  name: ?string,
};

export type PermissionsList = Array<Permission>;

class Permissions {
  list: PermissionsList;

  constructor (permissionsList: string|PermissionsList) {
    if (typeof permissionsList === 'string') {
      this.list = JSON.parse(permissionsList);
    } else {
      this.list = permissionsList;
    }
  }

  updateList (newList: PermissionsList): PermissionsList {
    this.list = newList;
    return this.list;
  }

  translateConcepts (streams: Array<Stream>): void {
    const translatedPermissions = new Map();

    const translationTable = computeTranslationTable(streams);
    this.list.forEach((permission, i, list) => {
      const concept = permission.concept;

      if (concept == null) {
        // Permission does not need to be translated
        addTranslatedPermission(translatedPermissions, permission, permission.streamId);
      } else {
        let translated = false;
        concept.type = concept.type.toUpperCase();
        // Translation using 'KEYWORD' type
        if (concept.type === 'KEYWORD') {
          for (const key in translationTable) {
            translationTable[key].forEach(stream => {
              if (stream.display != null && stream.display.includes(concept.value)) {
                addTranslatedPermission(translatedPermissions, permission, stream.id);
                translated = true;
              }
            });
          }
        } else {
          // Translation using other type (e.g. 'SNOMED' or 'LOINC')
          const matchingStreams = translationTable[`${concept.type}_${concept.value}`];
          if (matchingStreams != null && matchingStreams.length > 0) {
            matchingStreams.forEach(stream => {
              addTranslatedPermission(translatedPermissions, permission, stream.id);
              translated = true;
            });
          }
        }

        if (!translated) {
          throw new AppError(`Concept with type ${concept.type} and value ${concept.value} not found.`);
        }
      }
    });

    this.updateList(Array.from(translatedPermissions.values()));
  }
}

function addTranslatedPermission (translatedPermissions: Map<string, Permission>, permission: Permission, streamId?: string): void {
  if (streamId != null) {
    const existingPermission = translatedPermissions.get(streamId);
    if (existingPermission == null || isLowerLevel(existingPermission, permission)) {
      let translatedPermission = Object.assign({}, permission, {streamId: streamId});
      delete translatedPermission.concept;
      translatedPermissions.set(streamId, translatedPermission);
    }
  }
}

function isLowerLevel (existingPermission: Permission, permission: Permission): boolean {
  const existingLevel = existingPermission.level;
  const level = permission.level;
  switch (existingLevel) {
    case 'read': return level === 'contribute' || level === 'manage';
    case 'contribute': return level === 'manage';
    case 'manage': return false;
    default: return false;
  }
}

function computeTranslationTable (streams: Array<Stream>) {
  const table = {};
  streams.forEach(iter);
  return table;

  function iter (stream) {
    // Populate translation table
    if (stream.clientData != null) {
      const sempryvCodes = stream.clientData['sempryv:codes'];
      if (sempryvCodes != null) {
        for (const type in sempryvCodes) {
          const codes = sempryvCodes[type];
          codes.forEach(code => {
            const index = `${code.system_name}_${code.code}`;
            if (table[index] == null) {
              table[index] = [];
            }
            table[index].push({
              id: stream.id,
              display: code.display,
            });
          });
        }
      }
    }
    // Recursively look in children
    if (Array.isArray(stream.children)) {
      stream.children.forEach(iter);
    };
  }
}

export default Permissions;
