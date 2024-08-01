import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserListProps } from '@/app/types';

interface UserListComponentProps {
  users: UserListProps[];
}

const UserList: React.FC<UserListComponentProps> = ({ users }) => {
  return (
    <section>
      {users.map((user, index) => (
        <ul key={index}>
          <li>{user.user_id}</li>
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
