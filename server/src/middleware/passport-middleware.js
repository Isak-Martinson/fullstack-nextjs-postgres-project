const passport = require('passport')
const {Strategy} = require('passport-jwt')
const {SECRET} = require('../constants')
const pool = require('../db')

const cookieExtractor = (req) => {
    let token = null
    if(req && req.cookies){
        token = req.cookies['token']
    }
    return token
}

const options = {
    secretOrKey: SECRET,
    jwtFromRequest: cookieExtractor,
}

passport.use(
    new Strategy(options, async({id}, done) => {
        try {
            const {rows} = await pool.query('SELECT user_id, user_email FROM users WHERE user_id = $1', [id])

            if(!rows.length) {
                throw new Error('401 not authorized')
            }

            let user = {id: rows[0].user_id, email: rows[0].user_email} 
            return done(null, user)
        } catch (error) {
            console.log(error.message)
            done(null, false)
        }
    })
)