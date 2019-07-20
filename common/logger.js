const log4js = require('log4js')
log4js.configure({
  level: 'all', // 超过这个级别会记录
  appenders: {
    FE: {
      type: "dateFile",
      filename: "log_file",
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true,
    }
  },
  categories: {
    default: { appenders: [ 'FE' ], level: 'all' }
  }
})
const logger = log4js.getLogger('FE')

module.exports = logger