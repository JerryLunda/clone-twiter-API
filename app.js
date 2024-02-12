const express = require('express')
const app = express()
const port = 8000

const userRooter= require("./roots//userRooter")
const twitRooter= require("./roots/twitRooter")
const authRooter = require("./roots/authRooter")
app.use(express.json())

app.use("/user", userRooter)
app.use("/twit", twitRooter)
app.use("/api",authRooter)

app.listen(port, ()=>{
    console.log('serveur démaré')
})
