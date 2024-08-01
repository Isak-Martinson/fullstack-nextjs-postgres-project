const pool = require('../db')
const {hash} = require('bcryptjs')
const {sign} = require('jsonwebtoken')
const {SECRET} = require('../constants')

exports.getUsers = async (req, res) => {
  await pool.query('SELECT user_id, user_email, user_name, user_is_member FROM users', (error, users) => {
  if (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    return;
  }
  res.status(200).json(users.rows)
  })
  } 

exports.register = async (req, res) => {
  const {user_name:username, user_email:email, user_password:password} = req.body
  try {
    const hashedPassword = await hash(password, 10)

    await pool.query('INSERT INTO users (user_name, user_email, user_password, user_is_member, user_is_admin) values($1, $2, $3, $4, $5)', [username, email, hashedPassword, false, false])

    return res.status(201).json({
      success: true,
      message: 'user is now registered'
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      success: false,
      error: error.message,
      message: 'problem when trying to register user'
    })
  }
}

exports.login = async(req, res) => {
  let user = req.user;
  let payload = {
    id: user.user_id,
    username: user.user_name,
    email: user.user_email,
    member: user.user_is_member
  }
  try {
    const token = sign(payload, SECRET)

    console.log('Response Headers: ', res.getHeaders())

    return res
    .status(200)
    .header('Content-Type', 'application/json;charset=UTF-8')
    .cookie('token', token, {httpOnly: true, sameSite: 'None', secure: true})
    .json({
      success: true,
      message: 'Logged in successfully.'
    })
  } catch (error) {
    console.log('error', error.message)
    return res.status(500).json({success: false, message: 'Internal server error'})
  }
}

exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: 'protected info'
    })
  } catch (error) {
    console.error(error.message)
  }
  } 

  exports.logout = async (req, res) => {
    try {
      return res.status(200).clearCookie('token', {httpOnly: true}).json({
        success: true,
        message: 'Logged out successfully.'
      })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({
        error: error.message
      })
    }
  }