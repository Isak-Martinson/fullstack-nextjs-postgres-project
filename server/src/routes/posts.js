const {getPosts, createPost} = require('../controllers/posts');
const { validationMiddleware } = require('../middleware/validation-middleware');
const { createPostValidation } = require('../validators/post')
const {Router} = require('express');
const router = Router();

router.get('/get-posts', getPosts)
router.post('/create-post', createPostValidation, validationMiddleware, createPost)

module.exports = router