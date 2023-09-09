import classNames from 'classnames/bind';
import styles from './ContentItems.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faCircleCheck,
  faHeart,
  faCommentDots,
  faShare,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Protypes from 'prop-types';

const cx = classNames.bind(styles);

function Item({ data }) {
  return (
    <>
      <Image className={cx('avatar-img')} src={data.avatar} alt="avt" />
      <div className={cx('content-items')}>
        <div className={cx('infor')}>
          <div className={cx('user')}>
            <p className={cx('nickname')}>
              <strong>{data.nickname}</strong>
            </p>
            {data.tick && (
              <FontAwesomeIcon
                className={cx('icon-check')}
                icon={faCircleCheck}
              />
            )}
            <p className={cx('name')}>
              <strong>{data.first_name + ' ' + data.first_name}</strong>
            </p>
          </div>
          <Button small outline className={cx('btn-follow')}>
            Follow
          </Button>
          <div className={cx('content-bio')}>
            {data.popular_video.description}
          </div>
          <div className={cx('music-bio')}>
            <FontAwesomeIcon className={cx('icon-music')} icon={faMusic} />
            <p>{data.popular_video.music}</p>
          </div>
        </div>
        <div className={cx('content')}>
          <div className={cx('videoo')}>
            <video
              src={data.popular_video.file_url}
              height={307}
              width={543}
              autoPlay
              controls
            />
          </div>
          <div className={cx('icon-interact')}>
            <button className={cx('btn-like')}>
              <span className={cx('bg-btn')}>
                <FontAwesomeIcon className={cx('btn')} icon={faHeart} />
              </span>
              <strong className={cx('number')}>
                {data.popular_video.likes_count}
              </strong>
            </button>

            <button className={cx('btn-comment')}>
              <span className={cx('bg-btn')}>
                <FontAwesomeIcon className={cx('btn')} icon={faCommentDots} />
              </span>
              <strong className={cx('number')}>
                {data.popular_video.comments_count}
              </strong>
            </button>

            <button className={cx('btn-view')}>
              <span className={cx('bg-btn')}>
                <FontAwesomeIcon className={cx('btn')} icon={faFolder} />
              </span>
              <strong className={cx('number')}>
                {data.popular_video.shares_count}
              </strong>
            </button>

            <button className={cx('btn-share')}>
              <span className={cx('bg-btn')}>
                <FontAwesomeIcon className={cx('btn')} icon={faShare} />
              </span>
              <strong className={cx('number')}>
                {data.popular_video.likes_count}
              </strong>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
Item.protoTypes = {
  data: Protypes.object.isRequired,
};

export default Item;
