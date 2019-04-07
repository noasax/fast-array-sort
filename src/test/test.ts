import chai from "chai";
import sort from "../main/index";

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
  it("empty string", () => {
    const arr: string[] = [];
    sort(arr).should.eql(arr.sort());
  });
  it("one string", () => {
    const arr: string[] = ["apple"];
    sort(arr).should.eql(arr.sort());
  });
  it("string with number", () => {
    const arr: string[] = ["1000", "99", "1234", "0", "42"];
    sort(arr).should.eql(arr.sort());
  });
  it("string", () => {
    const arr: string[] = ["apple", "banana", "candy", "appple", "", "bananana"];
    sort(arr).should.eql(arr.sort());
  });
  it("custom comparator", () => {
    const arr: any[] = [
      { order: 1, name: "apple" },
      { order: 5, name: "banana" },
      { order: 4, name: "candy" },
      { order: 2, name: "dollar" },
      { order: 3, name: "emit" },
    ];
    const expected: any[] = [
      { order: 1, name: "apple" },
      { order: 2, name: "dollar" },
      { order: 3, name: "emit" },
      { order: 4, name: "candy" },
      { order: 5, name: "banana" },
    ];
    sort(arr, (l: any, r: any) => l.order < r.order).should.eql(expected);
  });
});

describe("random sort", () => {
  it("integer bruteforce", () => {
    for (let tc = 0; tc < 100; tc++) {
      const arr: number[] = [...Array(100)].map(_ => Math.random() * 100);
      sort(arr).should.eql(arr.sort());
    }
  });
  it("string bruteforce", () => {
    for (let tc = 0; tc < 100; tc++) {
      const arr: string[] = [...Array(100)].map(_ =>
        Math.random()
          .toString(36)
          .slice(-5),
      );
      sort(arr).should.eql(arr.sort());
    }
  });
});
