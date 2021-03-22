var bcrypt = require('bcryptjs');

const EncryptPassword = async (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(hash)
            }
        });
    })
}


module.exports = { EncryptPassword }