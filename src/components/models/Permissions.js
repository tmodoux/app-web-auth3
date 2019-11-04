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

  translateConcepts (streams: Array<Stream>): PermissionsList {
    this.list.forEach((permission, i, list) => {
      const concept = permission.concept;
      if (concept != null) {
        const correspondingStream = this.findStream(streams, concept.value, concept.type);

        if (correspondingStream == null) {
          throw new AppError(`Concept not found: ${concept.value}`);
        }
        this.list[i].streamId = correspondingStream.id;
        delete this.list[i].concept;
      }
    });
    return this.list;
  }

  findStream (streams: Array<Stream>, conceptValue: string, conceptType: string): ?Stream {
    let foundStream = null;
    streams.some(iter);
    return foundStream;

    function iter (stream) {
      if (found(conceptType, stream)) {
        foundStream = stream;
        return true;
      }
      return Array.isArray(stream.children) && stream.children.some(iter);
    }

    function found (type: string, stream: Stream) {
      switch (type) {
        case 'keyword':
        case 'coucou':
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
