import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, data = [] }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>

      {data.map((acc) => (
        <AccountItem key={acc.id} data={acc} />
      ))}
      <p className={cx('more-btn')}>See all</p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default SuggestedAccounts;
