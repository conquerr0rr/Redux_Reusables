require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    // const accessToken = await jwt.sign(id, process.env.ACCESS_TOKEN_SECRET);
    // return accessToken;
    const accessToken = jwt.sign({ id: id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: 60 * 60 }
    );
    return accessToken;
}

const verifyToken = (token) => {
    let decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    return decode;
}


module.exports = {generateToken, verifyToken};