const request = require("supertest")
const app = require("../app")
const mongoose = require("mongoose")

describe("Homepage Endpoint Tests", () => {
  // Cleans up database connection after all tests have been done
  afterAll(() => {
    mongoose.connection.close()
    // app.close()
  })
  // Checks for a status of 200
  describe("GET /", () => {
    it("should return a status of 200", (done) => {
      request(app)
        .get("/")
        .expect((res) => {
          expect(res.status).toEqual(200)
        })
        .end((err, res) => {
          if (err) {
            return done(err)
          }
          done()
        })
    })
  })

  // Checks that the HTML is being sent
  describe("GET /", () => {
    it("should return the homepage HTML", (done) => {
      request(app)
        .get("/")
        .expect((res) => {
          expect(res.text).toMatch("<!DOCTYPE html>")
        })
        .end((err, res) => {
          if (err) {
            return done(err)
          }
          done()
        })
    })
  })
})
