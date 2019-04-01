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
    it("bruteforce", () => {
        for (let tc = 0; tc < 100; tc++) {
            const arr = [...Array(100)].map(_ => Math.random() * 100);
            index_1.default(arr).should.eql(arr.sort());
        }
    });
});
