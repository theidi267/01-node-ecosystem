'use strict';

const greet = require('../../lib/greet.js')

const assert = require('assert');

let message = '';

message = greet.greetings('Timea');

assert.strictEqual(message, 'hello Timea', 'does not match');