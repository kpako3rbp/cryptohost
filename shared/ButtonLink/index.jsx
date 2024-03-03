import cl from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

const ButtonLink = (props) => {
  const { className, children, href, color = 'blue' } = props;

  const buttonClassName = cl(
    styles.button,
    { [styles.buttonBlue]: color === 'blue' },
    { [styles.buttonGreen]: color === 'green' },
  );

  return (
    <Link href={href} className={cl(className, buttonClassName)}>
      <div className={styles.buttonInner}>{children}</div>
    </Link>
  );
};

export default ButtonLink;
