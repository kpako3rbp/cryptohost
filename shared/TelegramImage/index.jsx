import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const TelegramImage = (props) => {
  const { className } = props;
  return <div className={cl(styles.telegram, className)} />;
};

export default TelegramImage;
