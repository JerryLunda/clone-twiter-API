const express = require('express');
const userRouter = express.Router()

const userController = require("../src/controllers/userController")

userRouter.get("/",userController.getUser)
userRouter.get("/:id",userController.getUserById)
userRouter.post("/",userController.postUser)
userRouter.put("/:id",userController.putUser)
userRouter.delete("/:id",userController.deleteUser)

module.exports = userRouter;