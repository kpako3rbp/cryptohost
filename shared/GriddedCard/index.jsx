import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const GriddedCard = (props) => {
  const { className, children } = props;

  return <div className={cl(className, styles.card)}>{children}</div>;
};

export default GriddedCard;
