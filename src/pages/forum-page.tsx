import Topic from '../components/topic/Topic';
import styles from '../styles/global.module.scss';

const ForumPage = ():JSX.Element => (
  <div className={styles.wrapper}>

    <h3 className={styles.title}>Форум</h3>
    <Topic />
  </div>
);

export default ForumPage;
