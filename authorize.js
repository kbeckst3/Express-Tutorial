const authorize = (req, res, next) => {
    const {user} = req.query;

    if(user === "Keller"){
        req.user = {name: 'Keller', if:5}
        next()
    }else{
        res.status(401).send('Unauthorized')
    }

}

module.exports = authorize;