import cl from 'classnames';
import React from 'react';

import Card from '@/shared/ui/Card';

import styles from './index.module.scss';

const Preloader = (props) => {
  const { children, className } = props;

  return (
    <Card className={cl(className, styles.preloaderWrapper)}>
      <div className={styles.preloader}></div>
      {/*<p className={styles.preloaderText}>Загрузка...</p>*/}
    </Card>
  );
};

export default Preloader;
