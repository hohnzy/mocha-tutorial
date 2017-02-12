var assert = require('chai').assert;
var first = require('../first');

describe('First', function() {
    it('first should return hello hohnzy', function() {
        assert.equal(first(), 'hello hohnzy');
    });
});