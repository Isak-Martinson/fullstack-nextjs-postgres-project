const pool = require('../db')

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
      // const {post_title:postTitle, post_text: postText} = req.body
      console.log(req.body)
      const {post_title: postTitle, post_text: postText} = req.body;
      // try {
      //   await pool.query('INSERT INTO posts ()')
      // } catch (error) {
        
      // }
    }