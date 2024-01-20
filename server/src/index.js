const express = require('express');
const app = express();
const cors = require('cors')
const {PORT, CLIENT_URL} = require('./constants')
const cookieParser = require('cookie-parser')
const passport = require('passport')

//import passport middleware
require('./middleware/passport-middleware')

// Initialize middleware
app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())

// import routes
const authRoutes = require('./routes/auth')

// initialize routes
app.use('/api', authRoutes)

app.use(cors({origin: CLIENT_URL, credentials: true}))

app.listen(PORT, () => {
    console.log(`Server listening on the port  ${PORT}`);
})