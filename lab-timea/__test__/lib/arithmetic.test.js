'use strict';

const greet = require('../../lib/arithmetic.js')

const assert = require('assert');


let addValue = 0

addValue = math.add();

assert.strictEqual(message, null, 'parameters required');

addValue = math.add(2);

assert.strictEqual(message, null, 'two parameters are required');

addValue = math.add(2, 4, 6);

assert.strictEqual(message, null, 'only two parameters are permitted');

addValue = math.add('randomstring');

assert.strictEqual(message, null, 'only numeric values are required');

addValue = math.add({});

assert.strictEqual(message, null, 'objects are not permitted');

addValue = math.add(7, 3);

assert.strictEqual(message, 10, 'not a match');

let subValue = 0

subValue = math.sub();

assert.strictEqual(message, null, 'parameters required');

subValue = math.sub(2);

assert.strictEqual(message, null, 'two parameters are required');

subValue = math.sub(2, 4, 6);

assert.strictEqual(message, null, 'only two parameters are permitted');

subValue = math.sub('randomstring');

assert.strictEqual(message, null, 'only numeric values are required');

subValue = math.sub({});

assert.strictEqual(message, null, 'objects are not permitted');

subValue = math.sub(7, 3);

assert.strictEqual(message, 4, 'not a match');