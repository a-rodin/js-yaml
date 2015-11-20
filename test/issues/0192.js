'use strict';


var assert = require('assert');
var yaml   = require('../../');

test('Non-printable characters inside quoted scalars', function () {
  assert.doesNotThrow(function () { yaml.load('"\ud800"'); }, 'Throws on non-printable character');
});
