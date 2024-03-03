import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const Container = (props) => {
  const { children, className } = props;

  return <div className={cl(className, styles.container)}>{children}</div>;
};

export default Container;
