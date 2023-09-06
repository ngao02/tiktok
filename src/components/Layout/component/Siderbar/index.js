import classNames from 'classnames/bind';
import styles from './Siderbar.module.scss';

const cx = classNames.bind(styles);
function Siderbar() {
  return <div className={cx('wrapper')}>siderbar</div>;
}

export default Siderbar;
