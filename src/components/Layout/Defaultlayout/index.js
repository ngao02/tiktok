import classNames from 'classnames/bind';
import Header from '~/components/Layout/component/Header';
import Siderbar from '~/components/Layout/component/Siderbar/Siderbar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Siderbar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
