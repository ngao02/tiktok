import Item from './Item';
import Protypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ContentItems.module.scss';

const cx = classNames.bind(styles);

function ContentItems({ data }) {
  return (
    <>
      {data.map((item) => (
        <div className={cx('wrapper')}>
          <Item key={item.id} data={item} />
        </div>
      ))}
    </>
  );
}

ContentItems.protoTypes = {
  data: Protypes.object.isRequired,
};

export default ContentItems;
