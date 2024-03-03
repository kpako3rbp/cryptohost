import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const BitcoinImage = (props) => {
  const { className } = props;
  return <div className={cl(styles.bitcoin, className)} />;
};

export default BitcoinImage;
