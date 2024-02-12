const TWITS = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952",
        "like": 9122, 
        "repost": 10
    }
]

exports.getTwit = (req, res) => {
    res.status(200).json(TWITS)
}

exports.getTwitById = (req, res) => {
    const tweetId = req.params.id;
    const tweet = TWITS[tweetId]
    if (!tweet) {
        return res.status(404).json({error: "Tweet not found"})
    }
     
    res.json(TWITS[tweetId]);
};

exports.postTwit = (req, res) => {
    TWITS.push(req.body)
    res.status(201).send("data added successfully")
};

exports.putTwit = (req, res)=>{
    const tweetId = req.params.id;
    const tweet = TWITS[tweetId]

    if (!tweet) {
        return  res.status(404).json({error: "Tweet not found"})  
    }

    TWITS[tweetId] = req.body
    res.send(`data with ID ${tweetId} updated successfully`)
}

exports.likeTwit = (req, res)=>{
    const tweetId = req.params.id;
    const tweet = TWITS[tweetId]
     if (tweet) {
        tweet.like++;
        res.send(`Tweet ${tweetId} liked successfully`);
     }
     else{
        res.status(404).json({error: "Tweet not found"})
     }
}

exports.deleteTwit = (req, res)=>{
    const tweetId = req.params.id;
    const tweet = TWITS[tweetId];
    if (!tweet) {
        return  res.status(404).json({error: "Tweet not found"})  
    }
    TWITS.splice(tweetId,1)
    res.send(`data with ID ${tweetId} deleted successfully`)
}