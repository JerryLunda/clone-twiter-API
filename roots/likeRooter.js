const express = require('express');
const likeRouter = express.Router()

const likeController = require("../src/controllers/likeController")

// likeRouter.get("",twitController.getTwit)
// likeRouter.get("/:id",twitController.getTwitById)
likeRouter.post("/",likeController.postLike)
// likeRouter.put("/:id",twitController.putTwit)
likeRouter.delete("/:idUser/:idTweet",likeController.deleteLike)

module.exports = likeRouter;
