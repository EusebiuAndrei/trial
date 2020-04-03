const mongoose = require('mongoose');
const scheduleSchema = require('./schema');

const decorateWithVirtuals = require('./virtuals');
const statics = require('./statics');
const methods = require('./methods');
const decorateWithHooks = require('./hooks');

decorateWithVirtuals(scheduleSchema);
Object.assign(scheduleSchema.methods, methods);
Object.assign(scheduleSchema.statics, statics);
decorateWithHooks(scheduleSchema);

const User = mongoose.model('User', scheduleSchema);

module.exports = User;
