const Redis = require("ioredis");
require("dotenv").config();

let redis;

if (process.env.REDIS_URL) {
  redis = new Redis(process.env.REDIS_URL);
} else {
  redis = new Redis();
}

module.exports = redis;
