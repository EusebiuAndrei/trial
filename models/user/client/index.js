const mongoose = require('mongoose');
const clientSchema = require('./schema');

const decorateWithVirtuals = require('./virtuals');
const statics = require('./statics');
const methods = require('./methods');
const decorateWithHooks = require('./hooks');

decorateWithVirtuals(clientSchema);
Object.assign(clientSchema.methods, methods);
Object.assign(clientSchema.statics, statics);
decorateWithHooks(clientSchema);

const User = mongoose.model('User', clientSchema);

module.exports = User;
