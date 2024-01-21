'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface UserListProps {
  user_id: Number;
  user_name: String;
  user_email: String;
  user_is_member: Boolean;
}

const UserList = () => {
  const [users, setUsers] = useState<Array<UserListProps>>([]);

  useEffect(() => {
    console.log('fetching data');
    axios
      .get('/api/FetchUsers')
      .then((res) => res.data)
      .then((data) => setUsers(data));
  }, []);

  return (
    <section>
      {users.map((user, index) => (
        <ul key={index}>
          <li>{user.user_name}</li>
          <li>{user.user_email}</li>
          <li>{user.user_is_member ? 'true' : 'false'}</li>
          <li>date</li>
        </ul>
      ))}
    </section>
  );
};

export default UserList;
