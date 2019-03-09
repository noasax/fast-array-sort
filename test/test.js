require('mocha');
const sort = require('../index');
const should = require('should');
describe('basic sort', function() {
  it('only integer', function() {
    var arr = [5, 2, 3, 4, 1];
    sort(arr).should.eql([1, 2, 3, 4, 5]);
  })
});
