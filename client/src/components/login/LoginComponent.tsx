import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

type LoginComponentProps = {
  toggleFunction: () => void;
};

const LoginComponent: React.FC<LoginComponentProps> = ({ toggleFunction }) => {
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
    <section className='flex flex-col w-screen h-screen absolute bg-[#D1D1D1] items-center justify-center bg-opacity-50 backdrop-blur-md'>
      <form
        className='flex flex-col items-center bg-red-500 bg-white rounded-lg'
        action='submit'
        onSubmit={handleSubmit}
      >
        <div className='w-full flex flex-row justify-end'>
          <p onClick={toggleFunction} className='p-4'>
            X
          </p>
        </div>

        <label htmlFor='user_name'>
          <input
            className='p-1 radius-10 border-[1.5px] border-black bg-transparent rounded-md mb-5 mx-10'
            onChange={handleChange}
            id='user_name'
            type='text'
            placeholder='Användarnamn'
            required
          />
        </label>
        <label htmlFor='user_password'>
          <input
            className='p-1 radius-10 border-[1.5px] border-black bg-transparent rounded-md mb-5'
            onChange={handleChange}
            id='user_password'
            type='password'
            placeholder='Lösenord'
            required
          />
        </label>
        <button className='mb-10 px-2 py-1 bg-black text-white rounded-md'>
          Logga in
        </button>
      </form>
    </section>
  );
};

export default LoginComponent;
