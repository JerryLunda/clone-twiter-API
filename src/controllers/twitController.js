const {createTwit, getAllTwit, getTwit} = require('../models/twitModel')

exports.getTwit = (req, res) => {
    getAllTwit()
    .then(tweet=>res.status(200).json(tweet))
}

exports.getTwitById = (req, res) => {
    const tweetId = parseInt(req.params.id);
    getTwit(tweetId)
    .then((twit)=>res.status(200).json(twit))
};

exports.postTwit = (req, res) => {
    try {
        const twit = req.body
        createTwit(twit)
        res.status(201).send("twit added successfully")
    } catch (error) {
        console.log('error');
    }
};

// exports.putTwit = (req, res)=>{
//     const tweetId = req.params.id;
//     const tweet = TWITS[tweetId]

//     if (!tweet) {
//         return  res.status(404).json({error: "Tweet not found"})  
//     }

//     TWITS[tweetId] = req.body
//     res.send(`data with ID ${tweetId} updated successfully`)
// }

// exports.likeTwit = (req, res)=>{
//     const tweetId = req.params.id;
//     const tweet = TWITS[tweetId]
//      if (tweet) {
//         tweet.like++;
//         res.send(`Tweet ${tweetId} liked successfully`);
//      }
//      else{
//         res.status(404).json({error: "Tweet not found"})
//      }
// }

// exports.deleteTwit = (req, res)=>{
//     const tweetId = req.params.id;
//     const tweet = TWITS[tweetId];
//     if (!tweet) {
//         return  res.status(404).json({error: "Tweet not found"})  
//     }
//     TWITS.splice(tweetId,1)
//     res.send(`data with ID ${tweetId} deleted successfully`)
// }