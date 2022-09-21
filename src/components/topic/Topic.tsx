import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Popover } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { TopicList } from './typeTopic';
import styles from './Topic.module.scss';
import dateLogo from './dateLogo.svg';
import commentLogo from './commentLogo.svg';

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

  const date = format(new Date('2022-09-20T11:15:07.795Z'), 'dd MMMM, HH:mm');
  const dataTitle = format(new Date('2022-09-20T11:15:07.795Z'), 'dd.MM.yyyy HH:mm');

  const popoverContent = (
    <div>
      <div>
        <img style={{ marginRight: '12px' }} src={dateLogo} alt="date-logo" />
        {dataTitle}
      </div>
      <div>
        <EditOutlined style={{ marginRight: '12px' }} />
        {dataTitle}
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
              <img className={styles.datelogo} src={dateLogo} alt="date-logo" />
              {date}
            </div>
          </Popover>
          <div className={styles.comment}>
            <img className={styles.commentlogo} src={commentLogo} alt="comment-logo" />
            {topic.comment}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Topic;
