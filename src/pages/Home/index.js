import ContentItems from './ContentItems/ContentItems';
import { useState, useEffect } from 'react';
import * as userService from '~/services/userService';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
  const [contentItems, setContentItems] = useState([]);
  useEffect(() => {
    userService
      .getContent({ page: 1, perPage: 20 })
      .then((data) => {
        setContentItems(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <aside className={cx('wrapper')}>
      <ContentItems data={contentItems} />
    </aside>
  );
}

export default Home;
