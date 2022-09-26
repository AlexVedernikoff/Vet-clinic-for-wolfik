import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Button, Layout } from 'antd';
import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
  type Header = { label: string; path: string }[];

  const links: Header = [
    { label: 'Список докторов', path: '/список докторов' },
    { label: 'Список процедур', path: '/список процедур' },
    { label: 'Список того', path: '/список того' },
    { label: 'О чем-нибудь', path: '/о чем-нибудь' },
    { label: 'Список сосисок', path: '/список сосисок' },
    { label: 'Контакты', path: '/контакты' },
    { label: 'О нас', path: '/о нас' },
    { label: 'Форум', path: '/forumPage' },
  ];

  return (
    <Layout.Header className={styles.wrapper}>
      {links.map((el) => (
        <Link to={`${el.path}`} key={uuidv4()} className={styles.link}>
          {el.label}
        </Link>
      ))}
      <Link to="/sign-in">
        <Button className={styles.signin}>sign-in</Button>
      </Link>
      <Link to="/sign-up">
        <Button className={styles.registration}>registration</Button>
      </Link>
    </Layout.Header>
  );
};
