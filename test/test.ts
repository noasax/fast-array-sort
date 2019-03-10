import sort from '../src/index';
import chai from 'chai';

let should = chai.should();

describe('basic sort', function() {
  it('only integer', function() {
    let arr : Array<number> = [5, 2, 3, 4, 1];
    sort(arr).should.eql([1, 2, 3, 4, 5]);
  })
});
