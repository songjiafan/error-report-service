const ERROR_CODE = require('./constants/error-code')

/**
 * @name 业务错误捕获中间件
 */
exports.errorMiddleWare = (error, req, res, next) => {
  const dmError = +error.message || ERROR_CODE.SYSTEM_ERROR
  const errorMsg = ERROR_CODE.ERROR_MSG_MAP[dmError]
  res.send({ dm_error: dmError, error_msg: errorMsg, data: null })
}

/**
 * @name 404中间件
 */
exports.notFoundMiddleWare = (req, res, next) => {
  next(new Error(404))
}
