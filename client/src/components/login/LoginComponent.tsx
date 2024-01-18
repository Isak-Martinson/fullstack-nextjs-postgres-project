const LoginComponent = () => {
  return (
    <section>
      <form action='submit'>
        <label htmlFor=''>
          <input type='text' />
        </label>
        <label htmlFor=''>
          <input type='password' />
        </label>
        <button>log in</button>
      </form>
    </section>
  );
};

export default LoginComponent;
