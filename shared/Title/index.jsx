import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const Title = (props) => {
  const { children, className, type } = props;

  if (type === 'main') {
    return <h1 className={cl(className, styles.title)}>{children}</h1>;
  }
  if (type === 'small') {
    return <h3 className={cl(className, styles.title, styles.titleSmall)}>{children}</h3>;
  }
  return <h2 className={cl(className, styles.title, styles.titleMedium)}>{children}</h2>;
};

export default Title;
