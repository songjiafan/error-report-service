const redisClient = require('../../common/redis-client')

exports.appendErrorReportToList = async report => {
  return await redisClient('lpush', 'INKE:FE:LIST', report)
} 