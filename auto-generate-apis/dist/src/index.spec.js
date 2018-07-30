"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('testFunc', () => {
    it("should return 0", done => {
        expect(index_1.testFunc(0)).toBe(0);
        done();
    });
    it("should return 4", done => {
        expect(index_1.testFunc(2)).toBe(4);
        done();
    });
    it("should return 4", done => {
        expect(1).toBe(1);
        done();
    });
});
//# sourceMappingURL=index.spec.js.map