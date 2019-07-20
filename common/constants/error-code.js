/**
 * api业务错误码
 */
const SUCCESS = 0

const NOT_FOUND_ERROR = 404

const PARAM_ERROR = 499

const SYSTEM_ERROR = 500

const ERROR_MSG_MAP = {
  [SUCCESS]: '操作成功',
  [NOT_FOUND_ERROR]: '访问路径不存在',
  [PARAM_ERROR]: '请求参数错误',
  [SYSTEM_ERROR]: '内部系统错误'
}

module.exports = {
  SUCCESS,
  PARAM_ERROR,
  NOT_FOUND_ERROR,
  SYSTEM_ERROR,
  ERROR_MSG_MAP
}