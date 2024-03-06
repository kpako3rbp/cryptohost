import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const Logo = (props) => {
  const { className, descriptor } = props;

  return (
    <div className={cl(className, styles.logo)}>
      <div className={styles.logoName}>
        Cryptohost<span>/</span>
      </div>
      {descriptor && <div className={styles.logoDescriptor}>крипто-блокчейн медиа</div>}
    </div>
  );
};

export default Logo;
