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
    const id = req.params.id;
    res.json(TWITS[id]);
};

exports.postTwit = (req, res) => {
    TWITS.push(req.body)
    res.status(201).send("data added successfully")
};

exports.putTwit = (req, res)=>{
    const id = req.params.id;
    TWITS[id] = req.body
    res.send(`data with ID ${id} updated successfully`)
}

exports.deleteTwit = (req, res)=>{
    const id = req.params.id;
    TWITS.splice(id,1)
    res.send(`data with ID ${id} deleted successfully`)
}