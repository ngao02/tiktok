import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const rederPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview data={data} />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[-20, -5]}
        placement="bottom"
        render={rederPreview}
      >
        <div className={cx('account-item')}>
          <Image
            className={cx('avatar')}
            src={data.avatar}
            alt={data.nickname}
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong className={cx('name')}>{data.nickname}</strong>
              {data.tick && (
                <FontAwesomeIcon
                  className={cx('icon-check')}
                  icon={faCircleCheck}
                />
              )}
            </p>
            <p className={cx('name')}>
              {data.first_name + ' ' + data.last_name}
            </p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}
AccountItem.propTypes = {
  label: PropTypes.object.isRequired,
};

export default AccountItem;
