const ERROR_CODE = require('../../common/constants/error-code')
const logger = require('../../common/logger')
const redisClient = require('../../common/redis-client')

exports.errorReport = async (req, res, next) => {
  const a = await redisClient('lpush', 'INKE:FE:LIST', 2)
  console.log(a)
  // res.send(a)
  // if (!req.query.uid) {
  //   throw new Error(ERROR_CODE.PARAM_ERROR)
  // } else {
  //   logger.error('error')
  //   res.send({ code: 0 })
  // }
}

exports.performanceReport = function (req, res, next) {
  res.send('performanceRepor con')  
}