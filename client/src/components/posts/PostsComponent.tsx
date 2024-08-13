import { useEffect, useState } from 'react';
import axios from 'axios';
import { PostsProps, UserListProps } from '@/app/types';

interface PostsComponentProps {
  postsData: PostsProps[];
  // userData: UserListProps[];
}

const PostsComponent: React.FC<PostsComponentProps> = ({ postsData }) => {
  console.log('postData: ', postsData);

  const dateTransform = (date: any) => {
    const dateNow = new Date().getTime();
    const postedAtDate = new Date(date).getTime();
    const difference = dateNow - postedAtDate;

    const seconds = Math.floor(difference / (1 * 1000));
    const minutes = Math.floor(difference / (60 * 1000));
    const hours = Math.floor(difference / (60 * 60 * 1000));
    const days = Math.floor(difference / (24 * 60 * 60 * 1000));
    const years = Math.floor(difference / (365 * 24 * 60 * 60 * 1000));

    console.log('dateNow', dateNow, 'posted at date', postedAtDate);
    console.log('minutes', minutes, 'days', days);
    console.log(seconds, minutes, hours, days, years);

    if (years >= 1) {
      return `${years} yr. ago`;
    } else if (days >= 1) {
      return `${days} day${days === 1 ? '' : 's'} ago `;
    } else if (hours >= 1) {
      return `${hours} hr. ago `;
    } else if (minutes >= 1) {
      return `${minutes} min. ago `;
    } else {
      return `${seconds} sec. ago `;
    }
  };

  return (
    <section className='w-full'>
      {postsData.map((post, index) => (
        <div className='pb-4' key={index}>
          <div className='px-6'>
            <h2 className='text-2xl font-bold pb-2'>{post.post_title}</h2>
            {/* <p className='pb-2'>{post.post_text}</p> */}
            <div className='flex flex-row justify-between pb-2'>
              <p>comments</p>
              <p>
                posted by: {post.user_name} {dateTransform(post.post_date)}
              </p>
            </div>
          </div>
          <hr className='border-t-1px border-black' />
        </div>
      ))}
    </section>
  );
};

export default PostsComponent;
