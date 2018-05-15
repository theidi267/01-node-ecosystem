'use strict';

module.exports = exports = {};

exports.greetings = (name) => {

  if( typeof name !== 'string' ) { return null; }

  if(name.length !== 1) { return null; }

  return `Hello ${name}`;
};