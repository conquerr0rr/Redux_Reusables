require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = async (email) => {
    const accessToken = await jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
    console.log({ accessToken: accessToken });
}

module.exports = generateToken;