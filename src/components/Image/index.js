import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(
  (
    { alt, src, fallback: noImg = images.noImage, className, ...props },
    ref,
  ) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
      setFallback(noImg);
    };

    return (
      <img
        className={classNames(styles.wrapper, className)}
        src={fallback || src}
        alt={alt}
        {...props}
        ref={ref}
        onError={handleError}
      />
    );
  },
);

export default Image;
