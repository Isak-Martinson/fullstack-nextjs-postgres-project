import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'http://localhost:9000/api/logout',
        {},
        { withCredentials: true }
      );
      if (response.data.success) {
        console.log(response.data);
        localStorage.setItem('isAuth', 'false');
        location.reload();
      }
    } catch (error) {
      console.error('logout was not sent to backend: ', error);
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};
export default Logout;
