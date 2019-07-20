const redis = require('redis')
const { redisConf } = require('../config/test')

module.exports = (command, ...rest) => new Promise((resolve, reject) => {
  try {
    const redisClient = redis.createClient({ ...redisConf })
    redisClient[command](...rest, (err, value) => {
      if (!err) {
        resolve(value)
      } else {
        reject(err)
      }
    })
  } catch ($e) {
    reject($e)
  }
})