const express = require('express');
const app = express();
const cors = require('cors')
const {PORT} = require('./constants')

// Initialize middleware
app.use(express.json())

// import routes
const authRoutes = require('./routes/auth')

// initialize routes
app.use('/api', authRoutes)

app.use(cors())

app.listen(PORT, () => {
    console.log(`Server listening on the port  ${PORT}`);
})