import classNames from 'classnames/bind';
import styles from './Siderbar.module.scss';
import routersConfig from '~/config/routes';
import Menu, { MenuItem } from './Menu';
import {
  HomeActiveIcon,
  HomeIcon,
  LiveIcon,
  LiveActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';
import { useState, useEffect } from 'react';
const cx = classNames.bind(styles);
function Siderbar() {
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  useEffect(() => {
    userService
      .getSuggested({ page: 1, perPage: 5 })
      .then((data) => {
        setSuggestedUsers(data);
        // {
        //   console.log(suggestedUsers);
        // }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title="For Your"
          to={routersConfig.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={routersConfig.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={routersConfig.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>

      <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} />

      <SuggestedAccounts label="Following accounts" />
    </aside>
  );
}

export default Siderbar;
