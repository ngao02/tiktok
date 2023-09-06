import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.avatar} />
      <div className={cx('infor')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon
              className={cx('icon-check')}
              icon={faCircleCheck}
            />
          )}
        </h4>
        <span className={cx('usename')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
