const LoginComponent = () => {
  return (
    <section>
      <form action='submit'>
        <label htmlFor=''>
          <input
            id='username'
            type='text'
            placeholder='Användarnamn'
            required
          />
        </label>
        <label htmlFor='password'>
          <input
            id='password'
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
