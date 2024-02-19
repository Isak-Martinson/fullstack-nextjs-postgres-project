import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import axios from 'axios';

const RegisterComponent = () => {
  const [errors, setErrors] = useState<any[]>([]);
  const [success, setSuccess] = useState({
    success: false,
    message: '',
  });
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
    try {
      const response = await axios.post(
        'http://localhost:9000/api/register',
        data
      );
      if (response.data.success === true) {
        setSuccess({
          ...success,
          success: true,
          message: response.data.message,
        });
      } else {
        setErrors(response.data.errors);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <section>
      {!success.success ? (
        <div>
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
              required
            />
            <label htmlFor='user_email'>Email</label>
            <input
              id='user_email'
              type='email'
              autoComplete='off'
              onChange={handleChange}
              required
            />
            <label htmlFor='user_password'>Lösenord</label>
            <input
              id='user_password'
              type='password'
              onChange={handleChange}
              required
            />
            <button>Skapa Konto</button>
          </form>
          <div>
            {errors.map((error, index) => (
              <p key={index}>{error.msg}</p>
            ))}
          </div>
        </div>
      ) : (
        <p>{success.message} 🎉</p>
      )}
    </section>
  );
};
export default RegisterComponent;
