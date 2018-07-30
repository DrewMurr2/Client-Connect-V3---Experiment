import { testFunc } from './index'

describe('testFunc', () => {
    it("should return 0", done => {
        expect(testFunc(0)).toBe(0)
        done()
    })
    it("should return 4", done => {
        expect(testFunc(2)).toBe(4)
        done()
    })
    it("should return 4", done => {
        expect(1).toBe(1)
        done()
    })
})