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
      if (found(conceptType, stream)) {
        matchingStreams.push(stream);
      }
      return Array.isArray(stream.children) && stream.children.forEach(iter);
    }

    function found (type: string, stream: Stream) {
      switch (type) {
        case 'keyword':
        case 'snomed':
        case 'loinc':
          return stream.clientData != null &&
            stream.clientData.concept != null &&
            stream.clientData.concept.value === conceptValue;
        default: throw new AppError(`Missing definition for concept type: ${conceptType}`);
      }
    }
  }
}

export default Permissions;
