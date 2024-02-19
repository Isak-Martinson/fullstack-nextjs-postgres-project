import { useEffect, useState } from 'react';
import axios from 'axios';

interface Test {
  post_id: Number;
  user_id: Number;
  post_title: String;
  post_text: String;
  post_date: String;
}

const PostsComponent = () => {
  const [posts, setPosts] = useState<Array<Test>>([]);

  useEffect(() => {
    console.log('fetching data');
    axios
      .get('http://localhost:9000/api/get-posts')
      .then((res) => res.data)
      .then((data) => setPosts(data));
  }, []);

  return (
    <section>
      {posts.map((post) => (
        <div key={null}>
          <h2>{post.post_title}</h2>
          <p>{post.post_text}</p>
          <p>posted by: name here</p>
          <p>date</p>
        </div>
      ))}
    </section>
  );
};

export default PostsComponent;
