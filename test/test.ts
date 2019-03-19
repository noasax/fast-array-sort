import sort from '../src/index';
import chai from 'chai';

let should = chai.should();

describe('basic sort', function() {
  it('empty', function() {
    const arr : number[] = [];
    sort(arr).should.eql([]);
  }),
  it('one integer', function() {
    const arr : number[] = [1];
    sort(arr).should.eql([1]);
  }),
  it('only integer', function() {
    const arr : number[] = [5, 2, 3, 4, 1];
    sort(arr).should.eql([1, 2, 3, 4, 5]);
  }),
  it('asc order', function() {
    const arr : number[] = [1, 2, 3, 4, 5];
    sort(arr).should.eql([1, 2, 3, 4, 5]);
  }),
  it('desc order', function() {
    const arr : number[] = [5, 4, 3, 2, 1];
    sort(arr).should.eql([1, 2, 3, 4, 5]);
  }),
  it('duplicated - 1', function() {
    const arr : number[] = [1, 1, 1];
    sort(arr).should.eql([1, 1, 1]);
  }),
  it('duplicated - 2', () => {
    const arr : number[] = [5, 1, 2, 5, 3, 4, 1, 2, 1];
    sort(arr).should.eql([1, 1, 1, 2, 2, 3, 4, 5, 5]);
  }),
  it('bruteforce', () => {
    for(let tc = 0; tc < 100; tc++) {
      const arr : number[] = [...Array(100)].map(_ => Math.random() * 100);
      sort(arr).should.eql(arr.sort());
    }
  })
});
