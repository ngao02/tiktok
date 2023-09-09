import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
// import PropTypes from 'prop-types';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
        <Button primary small>
          Follow
        </Button>
      </div>
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>{data.nickname}</strong>
          {data.tick && (
            <FontAwesomeIcon
              className={cx('icon-check')}
              icon={faCircleCheck}
            />
          )}
        </p>
        <p className={cx('name')}>{data.first_name + ' ' + data.last_name}</p>
      </div>
      <p className={cx('analytics')}>
        <strong className={cx('value')}>{data.followers_count}</strong>
        <span className={cx('label')}>Followers</span>
        <strong className={cx('value')}>{data.likes_count}</strong>
        <span className={cx('label')}>Likes</span>
      </p>
    </div>
  );
}

export default AccountPreview;
