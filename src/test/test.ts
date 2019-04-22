import chai from "chai";
import sort from "../main/index";

const should = chai.should();

describe("basic sort", () => {
  it("empty", () => {
    const arr: number[] = [];
    const expected: number[] = arr.slice().sort((l, r) => l - r);
    sort(arr).should.eql(expected);
  });
  it("one integer", () => {
    const arr: number[] = [1];
    const expected: number[] = arr.slice().sort((l, r) => l - r);
    sort(arr).should.eql(expected);
  });
  it("only integer", () => {
    const arr: number[] = [5, 2, 3, 4, 1];
    const expected: number[] = arr.slice().sort((l, r) => l - r);
    sort(arr).should.eql(expected);
  });
  it("asc order", () => {
    const arr: number[] = [1, 2, 3, 4, 5];
    const expected: number[] = arr.slice().sort((l, r) => l - r);
    sort(arr).should.eql(expected);
  });
  it("desc order", () => {
    const arr: number[] = [5, 4, 3, 2, 1];
    const expected: number[] = arr.slice().sort((l, r) => l - r);
    sort(arr).should.eql(expected);
  });
  it("duplicated - 1", () => {
    const arr: number[] = [1, 1, 1];
    const expected: number[] = arr.slice().sort((l, r) => l - r);
    sort(arr).should.eql(expected);
  });
  it("duplicated - 2", () => {
    const arr: number[] = [5, 1, 2, 5, 3, 4, 1, 2, 1];
    const expected: number[] = arr.slice().sort((l, r) => l - r);
    sort(arr).should.eql(expected);
  });
  it("empty string", () => {
    const arr: string[] = [];
    const expected: string[] = arr.slice().sort((l, r) => (l < r ? -1 : 1));
    sort(arr).should.eql(expected);
  });
  it("one string", () => {
    const arr: string[] = ["apple"];
    const expected: string[] = arr.slice().sort((l, r) => (l < r ? -1 : 1));
    sort(arr).should.eql(expected);
  });
  it("string with number", () => {
    const arr: string[] = ["1000", "99", "1234", "0", "42"];
    const expected: string[] = arr.slice().sort((l, r) => (l < r ? -1 : 1));
    sort(arr).should.eql(expected);
  });
  it("string", () => {
    const arr: string[] = ["apple", "banana", "candy", "appple", "", "bananana"];
    const expected: string[] = arr.slice().sort((l, r) => (l < r ? -1 : 1));
    sort(arr).should.eql(expected);
  });
  it("custom comparator", () => {
    const arr: any[] = [
      { order: 1, name: "apple" },
      { order: 5, name: "banana" },
      { order: 4, name: "candy" },
      { order: 2, name: "dollar" },
      { order: 3, name: "emit" },
    ];
    const expected: any[] = arr.slice().sort((l, r) => l.order - r.order);
    sort(arr, (l: any, r: any) => l.order - r.order).should.eql(expected);
  });
});

describe("random sort", () => {
  it("integer bruteforce", () => {
    for (let tc = 0; tc < 100; tc++) {
      const arr: number[] = [...Array(100)].map(_ => Math.random() * 100);
      const expected: number[] = arr.slice().sort((l, r) => l - r);
      sort(arr).should.eql(expected);
    }
  });
  it("string bruteforce", () => {
    for (let tc = 0; tc < 100; tc++) {
      const arr: string[] = [...Array(100)].map(_ =>
        Math.random()
          .toString(36)
          .slice(-5),
      );
      const expected: string[] = arr.slice().sort((l, r) => (l < r ? -1 : 1));
      sort(arr).should.eql(expected);
    }
  });
});
