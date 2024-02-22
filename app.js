const express = require('express')
const app = express()
const port = 8000

// const authRooter = require("./roots/authRooter")
const userRooter= require("./roots//userRooter")
const twitRooter= require("./roots/twitRooter")
const likeRooter= require("./roots/likeRooter")
const authRooter = require("./roots/authRooter")
app.use(express.json())

// app.use("/api",authRooter)
app.use("/login", authRooter)

app.use("/user", userRooter)
app.use("/twit", twitRooter)
app.use("/like",likeRooter);


app.listen(port, ()=>{
    console.log('serveur démaré')
})
