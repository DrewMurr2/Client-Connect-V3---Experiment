import request from "supertest";
import app from "../src/app";
import { anotherFunc } from "../src/controllers/number";

describe("GET /number/getNumbers", () => {
    it("should return 200 OK", (done) => {
        request(app).get("/number/getNumbers")
            .expect(200, done);
    });
});


describe("anotherFunc", () => {
    it("should return 0", done => {
        expect(anotherFunc()).toBe(0)
        done()
    })
})


