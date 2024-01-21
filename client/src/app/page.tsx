import PostsComponent from '@/components/posts/PostsComponent';
import UserList from '@/components/UserList/UserList';
import styles from './page.module.css';
import RegisterComponent from '@/components/register/RegisterComponent';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <PostsComponent /> */}
      {/* <UserList /> */}
      <RegisterComponent />
    </main>
  );
}
