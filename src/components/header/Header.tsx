import { NavLink, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Button, Dropdown, Layout } from 'antd';
import styles from './Header.module.scss';
import Bell from '../../assets/icons/Bell.svg';
import Avatar from '../../assets/icons/Avatar.png';
import Arrow from '../../assets/icons/ArrowPanel.svg';
import Menu from '../../assets/icons/MenuHeader.svg';
import '../../styles/global.scss';

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

  const Bool = false;

  return (
    <Layout.Header className={styles.wrapper}>
      <div className={styles.linksBlock}>
        {window.innerWidth >= 1224 ? (
          links.map((el) => (
            <NavLink to={`${el.path}`} key={uuidv4()} className={styles.link}>
              {el.label}
            </NavLink>
          ))
        ) : (
          <Dropdown
            overlay={(
              <div className={styles.menu}>
                {links.map((el) => (
                  <Link
                    to={`${el.path}`}
                    key={uuidv4()}
                    className={styles.link}
                  >
                    {el.label}
                  </Link>
                ))}
              </div>
            )}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
          >
            <img src={Menu} alt="Menu" />
          </Dropdown>
        )}
      </div>
      {Bool ? (
        <div className={styles.autorization}>
          <Link to="/sign-in">
            <Button className={styles.signin}>sign-in</Button>
          </Link>
          <Link to="/sign-up">
            <Button className={styles.registration}>registration</Button>
          </Link>
        </div>
      ) : (
        <div className={styles.panel}>
          <img className={styles.bell} src={Bell} alt="Уведомления" />
          <div className={styles.user}>
            <div className={styles.username}>
              <span>ThePetOwner</span>
              <span className={styles.role}>Клиент</span>
            </div>
            <img className={styles.arrow} src={Arrow} alt="Avatar" />
            <img src={Avatar} alt="Avatar" />
          </div>
        </div>
      )}
    </Layout.Header>
  );
};
