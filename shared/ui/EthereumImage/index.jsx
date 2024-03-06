import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const EthereumImage = (props) => {
  const { className } = props;
  return <div className={cl(styles.ethereum, className)} />;
};

export default EthereumImage;
