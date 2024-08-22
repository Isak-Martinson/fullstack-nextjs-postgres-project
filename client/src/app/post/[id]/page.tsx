'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostComponent from '@/components/post/PostComponent';
import { PostByIdProps } from '../../types';

export default function Home() {
  const [postData, setPostData] = useState<Array<PostByIdProps>>([]);

  useEffect(() => {
    console.log('fetching posts data');
    const url = window.location.href;
    const postId = url.split('post/')[1];
    axios
      .get('http://localhost:9000/api/get-post-by-id', { headers: { postId } })
      .then((res) => res.data)
      .then((data) => setPostData(data));
  }, []);
  return (
    <main className='flex flex-col items-center px-4'>
      <h1 className='text-6xl font-bold md:text-9xl'>b</h1>
      <section className='text-section'>
        <PostComponent postData={postData} />
      </section>
    </main>
  );
}
