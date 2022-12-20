
const axios = require('axios')
const expect = require('chai').expect;

describe("latittude & longitude must be defined in the params of the endpoint", () => {
  it("should respond with 200 status code", async () => {
    const data = await axios.get("http://localhost:3001/api/pollutions/nearestCity", {
      params: {
        lat: "48.856613",
        lon: "2.352222",
        "key": "2f3bbab4-b50b-467f-a0e8-b43ea2cfa505"
      }
    })
    expect(data.status).to.equal(200)
  })
});