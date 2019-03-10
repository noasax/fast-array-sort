"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index"));
const chai_1 = __importDefault(require("chai"));
let should = chai_1.default.should();
describe('basic sort', function () {
    it('only integer', function () {
        const arr = [5, 2, 3, 4, 1];
        index_1.default(arr).should.eql([1, 2, 3, 4, 5]);
    }),
        it('asc order', function () {
            const arr = [1, 2, 3, 4, 5];
            index_1.default(arr).should.eql([1, 2, 3, 4, 5]);
        }),
        it('desc order', function () {
            const arr = [5, 4, 3, 2, 1];
            index_1.default(arr).should.eql([1, 2, 3, 4, 5]);
        }),
        it('empty', function () {
            const arr = [];
            index_1.default(arr).should.eql([]);
        }),
        it('duplicated - 1', function () {
            const arr = [1, 1, 1];
            index_1.default(arr).should.eql([1, 1, 1]);
        }),
        it('duplicated - 2', () => {
            const arr = [5, 1, 2, 5, 3, 4, 1, 2, 1];
            index_1.default(arr).should.eql([1, 1, 1, 2, 2, 3, 4, 5, 5]);
        }),
        it('1000 length', () => {
            const arr = [...Array(1000)].map(_ => Math.random() * 100);
            index_1.default(arr).should.eql(arr.sort());
        });
});
