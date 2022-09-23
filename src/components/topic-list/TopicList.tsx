import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import { CalendarOutlined, CommentOutlined, EditOutlined } from '@ant-design/icons';
import styles from './TopicList.module.scss';

type Topic = {
  id: number,
  title: string,
  content: string,
  avatar: string,
  firstname: string,
  lastname: string,
  comment: number };

const TopicList = ():JSX.Element => {
  const topicList:Topic[] = [
    { id: 1,
      title: 'Topic #1',
      content: 'Lorem ipsum dolor sit amet',
      avatar: 'https://avatarko.ru/img/kartinka/31/film_Avatar_30471.jpg',
      firstname: 'John',
      lastname: 'Doe',
      comment: 300,
    },
    {
      id: 2,
      title: 'Рыбные сухарики или мясные? Вот в чём вопрос',
      content: 'Философские размышления и вечные споры.',
      avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
      firstname: 'MeowMeow',
      lastname: 'Cat',
      comment: 500,
    },
  ];

  const date = Intl.DateTimeFormat('ru', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric' })
    .format(new Date());
  const datePopover = Intl.DateTimeFormat('ru', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric' })
    .format(new Date());

  const popoverContent = (
    <div>
      <div>
        <CalendarOutlined className="anticon" />
        {datePopover}
      </div>
      <div>
        <EditOutlined className="anticon" />
        {datePopover}
      </div>
    </div>
  );

  return (
    <div>
      {topicList.map((topic) => (
        <div className={styles.wrapper} key={topic.id}>
          <div>
            <Link to="/onetopic">
              <h3 className={styles.title}>{topic.title}</h3>
            </Link>
            <div>{topic.content}</div>
          </div>
          <div className={styles.author}>
            <img className={styles.avatar} src={topic.avatar} alt="avatar" />
            <div className={styles.username}>
              {`${topic.firstname} ${topic.lastname}`}
            </div>
          </div>
          <Popover content={popoverContent}>
            <div className={styles.date}>
              <CalendarOutlined className="anticon" />
              {date}
            </div>
          </Popover>
          <div className={styles.comment}>
            <CommentOutlined className="anticon" />
            {topic.comment}
          </div>
        </div>
      ))}

    </div>
  );
};

export default TopicList;