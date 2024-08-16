'use client';
import axios from 'axios';
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import RichTextEditor from '../text-editor/RichTextEditor';

const CreatePost = () => {
  const [writeActive, setWriteActive] = useState(false);
  const [data, setData] = useState({
    post_title: '',
    post_text: '',
  });

  useEffect(() => {
    let x = document.cookie;
    console.log('testing testing osv', x);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setData({
      ...data,
      [event.target.id]: value,
    });
  };

  const handleSubmit = async (submitFormEvent: FormEvent) => {
    submitFormEvent.preventDefault();
    console.log('send this data', data);
    try {
      const response = await axios.post(
        'http://localhost:9000/api/create-post',
        data,
        { withCredentials: true }
      );
      if (response) {
        console.log('gick igenom');
      } else {
        console.log('error vid response');
      }
    } catch (error) {
      console.log('lyckades inte skicka till backend');
    }
  };

  return (
    <>
      <section className='w-full'>
        {!writeActive ? (
          <div className='flex flex-col'>
            <input
              className='border-b-[1px] border-black bg-transparent mb-20 px-6 py-2'
              type='text'
              placeholder='write a post?'
              onClick={() => {
                setWriteActive(true);
              }}
            />
          </div>
        ) : (
          // <form
          //   className='flex flex-col'
          //   action='submit'
          //   onSubmit={handleSubmit}
          // >
          //   <label htmlFor='post_title'>Title</label>
          //   <input
          //     className='border-[1px] border-black'
          //     onChange={handleChange}
          //     id='post_title'
          //     type='text'
          //     required
          //   />
          //   <label htmlFor='post_text'>Body text</label>
          //   <input
          //     className='border-[1px] border-black'
          //     onChange={handleChange}
          //     id='post_text'
          //     type='text'
          //     required
          //   />
          //   <button className='bg-black text-white'>Create post</button>
          // </form>
          <form>
            <label htmlFor='post_title'>Title</label>
            <input
              className='border-[1px] border-black w-full mb-4 p-2 bg-transparent'
              onChange={handleChange}
              placeholder='title'
              id='post_title'
              type='text'
              required
            />
            <RichTextEditor />
          </form>
        )}
      </section>
    </>
  );
};

export default CreatePost;
