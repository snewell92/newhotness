const { authenticate } = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const { restrictToOwner } = require('feathers-authentication-hooks');

const { hashPassword } = require('feathers-authentication-local').hooks;
const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: 'id',
    ownerField: 'id'
  })
];

module.exports = {
  // TODO restrict is too much, but we should have different access levels to update.
  before: {
    all: [],
    find: [], // temporarily allow finding without auth
    //find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [ authenticate('jwt'), hashPassword() ],
    update: [ ...restrict, hashPassword() ],
    patch: [ ...restrict ], // don't hash password here, authManagement service does that before patching
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [
      commonHooks.when(
        hook => hook.params.provider,
        commonHooks.discard('password')
      )
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
