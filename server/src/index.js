const express = require('express');
const app = express();
const cors = require('cors')
const {PORT, CLIENT_URL} = require('./constants')
const cookieParser = require('cookie-parser')
const passport = require('passport')

//import passport middleware
require('./middleware/passport-middleware')

// Initialize middleware
app.use(cors({origin: CLIENT_URL, credentials: true}))
app.use(express.json())
app.use((req, res, next) => {
    console.log('Request Protocol:', req.protocol);
    console.log('Request Headers:', req.headers);
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    next();
  });
app.use(cookieParser())
app.use(passport.initialize())

// import routes
const authRoutes = require('./routes/auth')
const postsRoutes = require('./routes/posts')

// initialize routes
app.use('/api', authRoutes)
app.use('/api', postsRoutes)

app.listen(PORT, () => {
    console.log(`Server listening on the port  ${PORT}`);
})