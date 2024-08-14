import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

const LoginComponent = () => {
  const [error, setError] = useState({
    isError: false,
    message: '',
  });
  const [values, setValues] = useState({
    user_name: '',
    user_password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.id]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:9000/api/login',
        {
          user_name: values.user_name,
          user_password: values.user_password,
        },
        {
          method: 'POST',
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.data.success === true) {
        console.log('du är nu inloggad');
        localStorage.setItem('isAuth', 'true');
        console.log(response.data);
        location.reload();
      } else {
        setError({
          ...error,
          isError: true,
          message: response.data.errors[0].msg,
        });
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <section>
      <form action='submit' onSubmit={handleSubmit}>
        <label htmlFor=''>
          <input
            onChange={handleChange}
            id='user_name'
            type='text'
            placeholder='Användarnamn'
            required
          />
        </label>
        <label htmlFor='password'>
          <input
            onChange={handleChange}
            id='user_password'
            type='password'
            placeholder='Lösenord'
            required
          />
        </label>
        <button>Logga in</button>
      </form>
    </section>
  );
};

export default LoginComponent;
