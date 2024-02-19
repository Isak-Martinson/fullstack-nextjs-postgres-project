const {getUsers, register, login, protected, logout} = require('../controllers/auth')
const {registerValidation, loginValidation} = require('../validators/auth')
const { validationMiddleware } = require('../middleware/validation-middleware');
const {Router} = require('express');
const router = Router();
const {userAuth} = require('../middleware/auth-middleware')

router.get('/get-users', getUsers)
router.get('/protected', userAuth, protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.get('/logout', logout)

module.exports = router