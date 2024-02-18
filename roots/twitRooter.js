const express = require('express');
const twitRouter = express.Router()

const twitController = require("../src/controllers/twitController")

twitRouter.get("",twitController.getTwit)
twitRouter.get("/:id",twitController.getTwitById)
twitRouter.post("/",twitController.postTwit)
// twitRouter.put("/:id",twitController.putTwit)
// twitRouter.delete("/:id",twitController.deleteTwit)

module.exports = twitRouter;
