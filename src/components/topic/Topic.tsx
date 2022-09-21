import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import { CalendarOutlined, CommentOutlined, EditOutlined } from '@ant-design/icons';
import { TopicList } from './typeTopic';
import styles from './Topic.module.scss';

const Topic = ():JSX.Element => {
  const topicList:TopicList = [
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
        <CalendarOutlined style={{ marginRight: '12px' }} />
        {datePopover}
      </div>
      <div>
        <EditOutlined style={{ marginRight: '12px' }} />
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
              <CalendarOutlined className={styles.datelogo} />
              {date}
            </div>
          </Popover>
          <div className={styles.comment}>
            <CommentOutlined className={styles.commentlogo} />
            {topic.comment}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Topic;
