import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const XImage = (props) => {
  const { className } = props;
  return <div className={cl(styles.x, className)} />;
};

export default XImage;
