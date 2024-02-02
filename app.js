const express = require('express')
const app = express()
const port = 8000

const userRooter= require("./roots/userRooter")
app.use(express.json())

app.use("/", userRooter)
app.listen(port, ()=>{
    console.log('serveur démaré')
})
