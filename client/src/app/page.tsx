import PostsComponent from '@/components/posts/PostsComponent';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <PostsComponent />
    </main>
  );
}
