const {createUser, getAllUser, getUser, deleteUser, updateUser} = require('../models/userModel')


exports.getUser = (req, res) => {
    getAllUser()
    .then((users)=>res.status(200).json(users))
}

exports.getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    getUser(id)
    .then((user)=>res.status(200).json(user))
};

exports.postUser = (req, res) => {
    createUser(req.body)
    res.status(201).send("data added successfully")
};

exports.putUser = (req, res)=>{
    const id = parseInt(req.params.id);
    const user = req.body
    updateUser(id, user)
    res.send(`data with ID ${id} updated successfully`)
}

exports.deleteUser = (req, res)=>{
    const id = parseInt(req.params.id);
    deleteUser(id)
    res.send(`data with ID ${id} deleted successfully`)
}