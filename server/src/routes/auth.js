const {getUsers, register} = require('../controllers/auth')
const {registerValidation} = require('../validators/auth')
const { validationMiddleware } = require('../middleware/validation-middleware');
const {Router} = require('express');
const router = Router();
const pool = require('../db');

router.get('/get-users', (req, res) => {
        pool.query('SELECT user_id, user_email, user_name, user_is_member FROM users', (error, users) => {
          if (error) {
            console.error('Database error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
          }
          res.status(200).json(users.rows)
        })
      }
)

router.get('/get-users', getUsers)
router.post('/register', registerValidation, validationMiddleware, register)

module.exports = router