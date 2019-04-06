"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const index_1 = __importDefault(require("../src/index"));
const should = chai_1.default.should();
describe("basic sort", () => {
    it("empty", () => {
        const arr = [];
        index_1.default(arr).should.eql([]);
    });
    it("one integer", () => {
        const arr = [1];
        index_1.default(arr).should.eql([1]);
    });
    it("only integer", () => {
        const arr = [5, 2, 3, 4, 1];
        index_1.default(arr).should.eql([1, 2, 3, 4, 5]);
    });
    it("asc order", () => {
        const arr = [1, 2, 3, 4, 5];
        index_1.default(arr).should.eql([1, 2, 3, 4, 5]);
    });
    it("desc order", () => {
        const arr = [5, 4, 3, 2, 1];
        index_1.default(arr).should.eql([1, 2, 3, 4, 5]);
    });
    it("duplicated - 1", () => {
        const arr = [1, 1, 1];
        index_1.default(arr).should.eql([1, 1, 1]);
    });
    it("duplicated - 2", () => {
        const arr = [5, 1, 2, 5, 3, 4, 1, 2, 1];
        index_1.default(arr).should.eql([1, 1, 1, 2, 2, 3, 4, 5, 5]);
    });
    it("empty string", () => {
        const arr = [];
        index_1.default(arr).should.eql(arr.sort());
    });
    it("one string", () => {
        const arr = ["apple"];
        index_1.default(arr).should.eql(arr.sort());
    });
    it("string with number", () => {
        const arr = ["1000", "99", "1234", "0", "42"];
        index_1.default(arr).should.eql(arr.sort());
    });
    it("string", () => {
        const arr = ["apple", "banana", "candy", "appple", "", "bananana"];
        index_1.default(arr).should.eql(arr.sort());
    });
    it("custom comparator", () => {
        const arr = [
            { order: 1, name: "apple" },
            { order: 5, name: "banana" },
            { order: 4, name: "candy" },
            { order: 2, name: "dollar" },
            { order: 3, name: "emit" },
        ];
        const expected = [
            { order: 1, name: "apple" },
            { order: 2, name: "dollar" },
            { order: 3, name: "emit" },
            { order: 4, name: "candy" },
            { order: 5, name: "banana" },
        ];
        index_1.default(arr, (l, r) => l.order < r.order).should.eql(expected);
    });
});
describe("random sort", () => {
    it("integer bruteforce", () => {
        for (let tc = 0; tc < 100; tc++) {
            const arr = [...Array(100)].map(_ => Math.random() * 100);
            index_1.default(arr).should.eql(arr.sort());
        }
    });
    it("string bruteforce", () => {
        for (let tc = 0; tc < 100; tc++) {
            const arr = [...Array(100)].map(_ => Math.random()
                .toString(36)
                .slice(-5));
            index_1.default(arr).should.eql(arr.sort());
        }
    });
});
