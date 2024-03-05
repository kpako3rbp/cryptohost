import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const Title = (props) => {
  const { children, className, type, color = 'black' } = props;

  const titleClassNames = cl(className, styles.title, {
    [styles.title]: type === 'main',
    [styles.titleSmall]: type === 'small',
    [styles.titleMedium]: type !== 'main' && type !== 'small',
    [styles.titlePurple]: color === 'purple',
  });

  if (type === 'main') {
    return <h1 className={titleClassNames}>{children}</h1>;
  }
  if (type === 'small') {
    return <h3 className={titleClassNames}>{children}</h3>;
  }
  return <h2 className={titleClassNames}>{children}</h2>;
};

export default Title;
