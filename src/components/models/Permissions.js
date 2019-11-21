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
    const translatedPermissions = [];

    this.list.forEach((permission, i, list) => {
      const concept = permission.concept;

      if (concept == null) {
        translatedPermissions.push(permission);
      } else {
        const matchingStreams = this.findStreams(streams, concept.value, concept.type);

        if (matchingStreams == null || matchingStreams.length < 1) {
          throw new AppError(`Concept not found: ${concept.value}`);
        }

        matchingStreams.forEach(stream => {
          delete permission.concept;
          permission.streamId = stream.id;
          translatedPermissions.push(permission);
        });
      }
    });

    this.updateList(translatedPermissions);
  }

  findStreams (streams: Array<Stream>, conceptValue: string, conceptType: string): Array<Stream> {
    const matchingStreams = [];
    streams.forEach(iter);
    return matchingStreams;

    function iter (stream) {
      if (found(stream)) {
        matchingStreams.push(stream);
      }
      return Array.isArray(stream.children) && stream.children.forEach(iter);
    }

    function found (stream: Stream) {
      if (stream.clientData != null) {
        const sempryvCodes = stream.clientData['sempryv:codes'];
        if (sempryvCodes != null) {
          for (const key in sempryvCodes) {
            const code = sempryvCodes[key];
            if (conceptType.toUpperCase === 'KEYWORD') {
              return code != null && code.display != null && code.display.includes(conceptValue);
            } else {
              return code != null && code.code === conceptValue;
            }
          }
        }
      }
      return false;
    }
  }
}

export default Permissions;
