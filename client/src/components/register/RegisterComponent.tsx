'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

const RegisterComponent = () => {
  const [data, setData] = useState({
    user_name: '',
    user_email: '',
    user_password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.id]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post('/api/RegisterUser', {
      method: 'POST',
      body: data,
    });
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor='user_name'>Användarnamn</label>
        <input
          id='user_name'
          type='text'
          autoComplete='off'
          onChange={handleChange}
        />
        <label htmlFor='user_email'>Email</label>
        <input
          id='user_email'
          type='email'
          autoComplete='off'
          onChange={handleChange}
        />
        <label htmlFor='user_password'>Lösenord</label>
        <input id='user_password' type='password' onChange={handleChange} />
        <button>Skapa Konto</button>
      </form>
    </section>
  );
};
export default RegisterComponent;
