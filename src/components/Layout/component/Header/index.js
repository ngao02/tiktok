import classNames from 'classnames/bind';
import TippyUnder from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import {
  faEllipsisVertical,
  faGlobe,
  faKeyboard,
  faMoon,
  faCircleQuestion,
  faUser,
  faBookmark,
  faCoins,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faGrinHearts } from '@fortawesome/free-regular-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import routersConfig from '~/config/routes';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: 'English',
    children: {
      title: 'language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Dark more',
  },
];

const MENU_ITEMS_USER = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View Profile',
    to: '/profile',
  },
  {
    icon: <FontAwesomeIcon icon={faBookmark} />,
    title: 'Favorites',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get Coins',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faGrinHearts} />,
    title: 'Settings',
    to: '/feedback',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];

function Header() {
  const currentUser = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to={routersConfig.home}>
            <img src={images.logo} alt="Tiktok" />
          </Link>
        </div>

        <Search />

        <div className={cx('action')}>
          <Button text>Upload</Button>
          {currentUser ? (
            <>
              <TippyUnder content="Message" placement="bottom">
                {/* trigger='click' */}
                <div>
                  <Button className={cx('action-btn')}>
                    <MessageIcon className={cx('btn')} />
                  </Button>
                </div>
              </TippyUnder>
              <TippyUnder content="Inbox" placement="bottom">
                <div>
                  <Button className={cx('action-btn')}>
                    <InboxIcon className={cx('btn')} />
                    <span className={cx('badge')}>24</span>
                  </Button>
                </div>
              </TippyUnder>
            </>
          ) : (
            <>
              {/* <Button text>Upload</Button> */}
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? MENU_ITEMS_USER : MENU_ITEMS}>
            {currentUser ? (
              <Image
                className={cx('avatar-img')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0094032b899e8d5a889f33adb3a828af~c5_100x100.jpeg?x-expires=1691330400&x-signature=ijK2BMAj5CtwCLnJWpE%2F0k9KWMM%3D"
                alt="avatarimg"
                // fallback={images.noImage}
              />
            ) : (
              <button className={cx('menu-icon')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
