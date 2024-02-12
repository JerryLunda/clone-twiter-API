const jwt = require('jsonwebtoken');

exports.login = (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if (username =='user' && password == 'password') {
        const token = jwt.sign({username:username}, 'secret_key', {expiresIn:'1h'});
        res.json({token: token});
    }
    else{
        res.status(401).json({message: 'Authentication failed'});
    }
};