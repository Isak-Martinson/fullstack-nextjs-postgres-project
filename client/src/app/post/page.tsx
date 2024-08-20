'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostComponent from '@/components/post/PostComponent';

export default function Home() {
  const [postData, setPostData] = useState();

  useEffect(() => {
    console.log('fetching posts data');
    axios
      .get('http://localhost:9000/api/get-post-by-id')
      .then((res) => res.data)
      .then((data) => setPostData(data));
  }, []);
  return (
    <main className='flex flex-col items-center px-4 sm:px-10 md:px-40'>
      <h1 className='text-6xl font-bold md:text-9xl'>b</h1>
      <PostComponent
      //   postsData={postData}
      />
    </main>
  );
}
