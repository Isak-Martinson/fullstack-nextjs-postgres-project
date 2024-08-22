import { PostByIdProps } from '@/app/types';

interface PostByIdComponentInterface {
  postData: PostByIdProps[];
}

const PostComponent: React.FC<PostByIdComponentInterface> = ({ postData }) => {
  console.log('post', postData);
  return (
    <>
      {postData.map((post, index) => {
        return (
          <div key={index}>
            <h1 className='font-bold text-6xl mb-[48px]'>{post.post_title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.post_text }}></div>
          </div>
        );
      })}
    </>
  );
};

export default PostComponent;
