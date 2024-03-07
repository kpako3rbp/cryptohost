import cl from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

const ButtonLink = (props) => {
  const { className, children, href, target, color = 'blue', padding = 'default' } = props;

  const buttonClassName = cl(
    styles.button,
    { [styles.buttonBlue]: color === 'blue' },
    { [styles.buttonGreen]: color === 'green' },
    { [styles.buttonGray]: color === 'gray' },
    { [styles.buttonPaddingSmall]: padding === 'small' },
  );

  return (
    <Link href={href} target={target && 'blank'} className={cl(className, buttonClassName)}>
      <div className={styles.buttonInner}>{children}</div>
    </Link>
  );
};

export default ButtonLink;
