import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const Card = (props) => {
  const { className, children, isGridded = false } = props;

  const cardClassNames = cl(className, styles.card, {
    [styles.cardGridded]: isGridded,
  });

  return <div className={cardClassNames}>{children}</div>;
};

export default Card;
