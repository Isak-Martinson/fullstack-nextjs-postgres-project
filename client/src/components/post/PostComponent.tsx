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
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: post.post_text }}
          ></div>
        );
      })}
    </>
  );
};

export default PostComponent;
