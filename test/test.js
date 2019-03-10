"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../src/index"));
var chai_1 = __importDefault(require("chai"));
var should = chai_1.default.should();
describe('basic sort', function () {
    it('only integer', function () {
        var arr = [5, 2, 3, 4, 1];
        index_1.default(arr).should.eql([1, 2, 3, 4, 5]);
    });
});
