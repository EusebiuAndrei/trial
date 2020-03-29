const mongoose = require('mongoose');
const userSchema = require('./schema');

const decorateWithVirtuals = require('./virtuals');
const statics = require('./statics');
const methods = require('./methods');
const decorateWithHooks = require('./hooks');

decorateWithVirtuals(userSchema);
Object.assign(userSchema.methods, methods);
Object.assign(userSchema.statics, statics);
decorateWithHooks(userSchema);

const User = mongoose.model('User', userSchema);

module.exports = User;
