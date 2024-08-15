'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CreatePost from '@/components/create-post/CreatePost';
import PostsComponent from '@/components/posts/PostsComponent';
import UserList from '@/components/UserList/UserList';
import RegisterComponent from '@/components/register/RegisterComponent';
import { UserListProps, PostsProps } from './types';

export default function Home() {
  const [users, setUsers] = useState<Array<UserListProps>>([]);
  const [posts, setPosts] = useState<Array<PostsProps>>([]);

  useEffect(() => {
    console.log('fetching user data');
    axios
      .get('http://localhost:9000/api/get-users')
      .then((res) => res.data)
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    console.log('fetching posts data');
    axios
      .get('http://localhost:9000/api/get-posts')
      .then((res) => res.data)
      .then((data) => setPosts(data));
  }, []);
  return (
    <main className='flex flex-col items-center px-4 sm:px-10 md:px-40'>
      <h1 className='text-6xl font-bold md:text-9xl'>brutalism</h1>
      <CreatePost />
      <PostsComponent postsData={posts} />
      {/* <UserList users={users} /> */}
      {/* <RegisterComponent /> */}
    </main>
  );
}
