'use strict';

const greet = require('../../lib/greet.js')

const assert = require('assert');

let message = '';

message = greet.greetings();

assert.strictEqual(message, null, 'parameter required');

message = greet.greetings('Pepper', 'Sophie');

assert.strictEqual(message, null, 'only one parameter is permitted');

message = greet.greetings(1);

assert.strictEqual(message, null, 'numeric values not permitted');

message = greet.greetings({});

assert.strictEqual(message, null, 'objects are not permitted');

message = greet.greetings('Pepper');

assert.strictEqual(message, 'Hello Pepper', 'not a match');