const pool = require('../db')
const {SECRET} = require('../constants')
const jwt = require('jsonwebtoken')

exports.getPosts = async (req, res) => {
    await pool.query('SELECT * FROM posts', (error, posts) => {
    if (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(200).json(posts.rows)
    })
    } 

    exports.createPost = async (req, res) => {
      console.log('req body: ', req.body)
      console.log('token cookie: ', req.cookies['token'])
      const token = req.cookies['token']
      const userId = jwt.decode(token).id
      const {post_title: postTitle, post_text: postText} = req.body;
      try {
        await pool.query('INSERT INTO posts (user_id, post_title, post_text, post_views) values($1, $2, $3, $4)', [userId, postTitle, postText, 0])
      } catch (error) {
        console.log('error creating post', error)
      }
    }