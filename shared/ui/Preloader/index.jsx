import cl from 'classnames';
import React from 'react';

import Card from '@/shared/ui/Card';

import styles from './index.module.scss';

const Preloader = (props) => {
  const { className, isGlobal = true } = props;

  const preloaderClassNames = cl(className, {
    [styles.preloaderGlobal]: isGlobal,
    [styles.preloaderStandalone]: !isGlobal,
  });

  return (
    <Card className={preloaderClassNames}>
      <div className={styles.preloader}></div>
    </Card>
  );
};

export default Preloader;
