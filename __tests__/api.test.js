const request = require("supertest")
const app = require("../app")
const mongoose = require("mongoose")

describe("API Endpoint Tests", () => {
  // Cleans up database connection after all tests have been done
  afterAll(() => {
    mongoose.connection.close()
  })
  // Checks for a status of 200 after creating a new short link
  describe("POST /", () => {
    it("should create a new short link", (done) => {
      const url = "http://www.google.com"
      request(app)
        .post("/s")
        .send("url_input=" + url)
        .set("Accept", "application/json")
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

  // Checks that the created short link url is the same as the original url
  describe("POST /", () => {
    it("created short link url should match original", (done) => {
      const url = "http://www.google.com"
      request(app)
        .post("/s")
        .send("url_input=" + url)
        .set("Accept", "application/json")
        .expect((res) => {
          expect(res.body.original_url).toEqual(url)
        })
        .end((err, res) => {
          if (err) {
            return done(err)
          }
          done()
        })
    })
  })

  // Checks that short link redirects to the correct url
  describe("GET /:shortlink", () => {
    it("should redirect to the correct url", (done) => {
      const shortlink = "ihND0vTPg"
      const url = "http://www.google.com"
      request(app)
        .get("/s/" + shortlink)
        .expect((res) => {
          expect(res.header.location).toEqual(url)
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
