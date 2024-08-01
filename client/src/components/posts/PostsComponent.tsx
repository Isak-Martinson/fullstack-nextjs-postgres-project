import { useEffect, useState } from 'react';
import axios from 'axios';
import { PostsProps, UserListProps } from '@/app/types';

interface PostsComponentProps {
  postsData: PostsProps[];
  // userData: UserListProps[];
}

const PostsComponent: React.FC<PostsComponentProps> = ({ postsData }) => {
  return (
    <section>
      {postsData.map((post) => (
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
