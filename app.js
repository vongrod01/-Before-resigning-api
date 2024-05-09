
const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())
const fs = require("fs")
const view_router = require('./routers/view_router')
const part_api = require('./routers/part_api')

app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs') // ทำให้ html เป็น dinamic โดยใช้ ejs
app.use(express.urlencoded({ extended: false }))

app.use(view_router,part_api)
// app.use(user)
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'public')))

let systemConfig = JSON.parse(fs.readFileSync('SystemConfig.json', 'utf-8'))
const port = systemConfig.server.port

app.listen(port,() => {
    console.log(`start server port ${port}`)
})