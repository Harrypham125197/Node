
import bcrypt from 'bcrypt';
import db from '../models';

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({

                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === "1" ? true : false,
                roleId: data.roleId,
            })
            resolve('Ok! Create a new user succeed!')

            console.log('-------------')
            console.log('data from services')
            console.log(data)
            console.log(hashPasswordFromBcrypt)
            console.log('-------------')

        } catch (e) {
            reject(e)
        }
    })
}


// let hashUserPassword = (password) => {
//     return new Promise(async (resole, reject) => {
//         bcrypt.genSalt(saltRounds, function (err, salt) {
//             bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
//                 // Store hash in your password DB.
//             });
//         });
//     })
// }

// Option du phong
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    hashUserPassword: hashUserPassword,
}