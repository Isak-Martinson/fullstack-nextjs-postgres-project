const {check} = require('express-validator');
const pool = require('../db')
const {compare} = require('bcryptjs')

// Check if user_name exists
const usernameExists = check('user_name').isLength({min: 5}).withMessage('needs to be atleast 5 characters').custom(async (value) => {
    const {rows} = await pool.query('SELECT * FROM users WHERE user_name = $1', [value])
    if(rows.length){
        throw new Error('Username already in use')
    }
})

// Password
const password = check('user_password').isLength({min: 6, max: 20}).withMessage('Password needs to include between 6 and 15 characters')

// Email
const email = check('user_email').isEmail().withMessage('Please provide a valid email')

// Cheack if email exists
const emailExists = check('user_email').custom(async (value) => {
    const {rows} = await pool.query('SELECT * FROM users WHERE user_email = $1', [value]);

    if(rows.length){
        throw new Error('Email already in use')
    }
})

//Login validation
const loginCheck = check('user_name').custom(async (value, {req}) => {
    const userName = await pool.query('SELECT * FROM users WHERE user_name = $1', [value])
    
    if(!userName.rows.length) {
        throw new Error('Username does not exist')
    }

    const validPassword = await compare(req.body.user_password, userName.rows[0].user_password)

    if(!validPassword){
        throw new Error('Wrong Password')
    }
    req.user = userName.rows[0]

})

module.exports = {
    registerValidation: [usernameExists, email, password, emailExists],
    loginValidation: [loginCheck]
}