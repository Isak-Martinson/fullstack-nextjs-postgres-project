'use client';
import axios from 'axios';
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';

const CreatePost = () => {
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
    <section>
      <form action='submit' onSubmit={handleSubmit}>
        <label htmlFor='post_title'>Title</label>
        <input onChange={handleChange} id='post_title' type='text' required />
        <label htmlFor='post_text'>Body text</label>
        <input onChange={handleChange} id='post_text' type='text' required />
        <button>submit</button>
      </form>
    </section>
  );
};

export default CreatePost;
