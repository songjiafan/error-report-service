const express = require('express')
const router = require('./routes')
const serverConfig = require('./common/constants/server')
const { 
  errorMiddleWare,
  payloadMiddleWare, 
  formDataMiddleWare, 
  notFoundMiddleWare 
} = require('./common/middlewares')

const app = express() // 初始化express

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(serverConfig.API_ROUTE, router)
app.use(notFoundMiddleWare)
app.use(errorMiddleWare)

module.exports = app