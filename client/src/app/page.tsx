'use client';
import PostsComponent from '@/components/posts/PostsComponent';
import UserList from '@/components/UserList/UserList';
import RegisterComponent from '@/components/register/RegisterComponent';
import LoginComponent from '@/components/login/LoginComponent';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <PostsComponent /> */}
      {/* <UserList /> */}
      {/* <RegisterComponent /> */}
      <LoginComponent />
    </main>
  );
}
