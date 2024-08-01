const {check} = require('express-validator');
const pool = require('../db')

//post title length
const postTitleLength = check('post_title').isLength({min: 1, max: 300}).withMessage('The title needs to include between 1 and 300 characters')

//post body text
const bodyTextLength = check('post_text').isLength({min: 1}).withMessage('The post needs to be atleast 1 character long')

module.exports = {
    createPostValidation: [postTitleLength, bodyTextLength],
}