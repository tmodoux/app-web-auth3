// @flow

import AppError from './AppError.js';

import type {Stream} from './Pryv.js';

type Permission = {
  streamId?: string,
  concept?: {
    value: string,
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
    // TODO: the implementation below is an example, it should be adapted
    this.list.forEach((permission, i, list) => {
      const concept = permission.concept != null ? permission.concept.value : null;
      if (concept != null) {
        const correspondingStream = streams.find((stream) => {
          return stream.clientData != null && stream.clientData.concept === concept;
        });

        if (correspondingStream == null) {
          throw new AppError(`Failed to translate concept: ${concept}`);
        }
        this.list[i].streamId = correspondingStream.id;
        delete this.list[i].concept;
      }
    });
    return this.list;
  }
}

export default Permissions;
