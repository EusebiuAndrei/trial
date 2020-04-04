const mongoose = require('mongoose');
const schema = require('./schema');

const decorateWithVirtuals = require('./virtuals');
const statics = require('./statics');
const methods = require('./methods');
const decorateWithHooks = require('./hooks');

decorateWithVirtuals(schema);
Object.assign(schema.methods, methods);
Object.assign(schema.statics, statics);
decorateWithHooks(schema);

const Provider = mongoose.model('Provider', schema);

module.exports = Provider;