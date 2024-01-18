const pool = require('../db')
const {hash} = require('bcryptjs')

exports.getUsers = async (req, res) => {
  try {
    const {rows} = await pool.query('SELECT * FROM users')
    console.log('response', rows)
  } catch (error) {
    console.log(error.message)
  }
}

exports.register = async (req, res) => {
  const {user_name:username, user_email:email, user_password:password} = req.body
  try {
    const hashedPassword = await hash(password, 10)

    await pool.query('INSERT INTO users (user_name, user_email, user_password) values($1, $2, $3)', [username, email, hashedPassword])

    return res.status(201).json({
      success: true,
      message: 'user is now registered'
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message
    })
  }
}