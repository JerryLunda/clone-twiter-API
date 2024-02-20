const express = require('express');
const likeRouter = express.Router()

const likeController = require("../src/controllers/likeController")

likeRouter.get("/:id",likeController.countLike)
likeRouter.post("/",likeController.postLike)
likeRouter.delete("/:idUser/:idTweet",likeController.deleteLike)

module.exports = likeRouter;
