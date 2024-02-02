const users = []

exports.getUser = (req, res) => {
    res.status(200).send(users)
}

exports.getUserById = (req, res) => {
    const id = req.params.id;
    res.json(users[id]);
};

exports.postUser = (req, res) => {
    users.push(req.body)
    res.status(201).send("data added successfully")
};

exports.putUser = (req, res)=>{
    const id = req.params.id;
    users[id] = req.body
    res.send(`data with ID ${id} updated successfully`)
}

exports.deleteUser = (req, res)=>{
    const id = req.params.id;
    users.splice(id,1)
    res.send(`data with ID ${id} deleted successfully`)
}