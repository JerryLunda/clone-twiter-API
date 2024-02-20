const {createLike, deleteLike, countLikeTweet} = require('../models/likeModel')


exports.postLike = (req, res) => {
    like = req.body
    createLike(like)
    res.status(201).send("tweet liked successfully")
};

exports.deleteLike = (req, res)=>{
    const userId = parseInt(req.params.idUser);
    const tweetId = parseInt(req.params.idTweet)
    deleteLike(userId, tweetId)
    res.send(`tweet unliked successfully`)
}


exports.countLike = (req, res) => {
    const tweetId = parseInt(req.params.id);
    countLikeTweet(tweetId)
    .then((like)=>res.status(200).json({like:like}))
};