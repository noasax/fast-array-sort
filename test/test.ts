import chai from "chai";
import sort from "../src/index";

const should = chai.should();

describe("basic sort", () => {
  it("empty", () => {
    const arr: number[] = [];
    sort(arr).should.eql([]);
  });
  it("one integer", () => {
    const arr: number[] = [1];
    sort(arr).should.eql([1]);
  });
  it("only integer", () => {
    const arr: number[] = [5, 2, 3, 4, 1];
    sort(arr).should.eql([1, 2, 3, 4, 5]);
  });
  it("asc order", () => {
    const arr: number[] = [1, 2, 3, 4, 5];
    sort(arr).should.eql([1, 2, 3, 4, 5]);
  });
  it("desc order", () => {
    const arr: number[] = [5, 4, 3, 2, 1];
    sort(arr).should.eql([1, 2, 3, 4, 5]);
  });
  it("duplicated - 1", () => {
    const arr: number[] = [1, 1, 1];
    sort(arr).should.eql([1, 1, 1]);
  });
  it("duplicated - 2", () => {
    const arr: number[] = [5, 1, 2, 5, 3, 4, 1, 2, 1];
    sort(arr).should.eql([1, 1, 1, 2, 2, 3, 4, 5, 5]);
  });
  it("bruteforce", () => {
    for (let tc = 0; tc < 100; tc++) {
      const arr: number[] = [...Array(100)].map(_ => Math.random() * 100);
      sort(arr).should.eql(arr.sort());
    }
  });
});
