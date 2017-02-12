var assert = require('chai').assert;
var add = require('../add');

describe('Add', () => {
    it('should add 5 and return 10', () => {
        var result = add(5);
        assert.equal(result, 10);
    });

    it('should return type number', () => {
        var result = add(5);
        assert.typeOf(result, 'number');
    });
});