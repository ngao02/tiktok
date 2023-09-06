import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounced } from '~/components/hooks';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const debounce = useDebounced(searchValue, 500);

  const valueRef = useRef();

  const handleClear = () => {
    setSearchValue('');
    valueRef.current.focus();
    setSearchResult([]);
  };

  const handleHideResult = () => {
    setShowSearch(false);
  };

  useEffect(() => {
    if (!debounce.trim()) {
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        debounce,
      )}&type=less`,
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      });
  }, [debounce]);
  return (
    <Tippy
      interactive
      visible={showSearch && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className={cx('search-label')}>Accounts</div>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={valueRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowSearch(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && (
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
        )}
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
