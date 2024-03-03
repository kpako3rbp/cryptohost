import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';
import Image from "next/image";

const CurrencyRateItem = (props) => {
  const { className, children, data } = props;

  return (
    <div className={cl(className, styles.rate)}>
      <Image className={styles.rateImg} src={'/coins/eth.svg'} alt={'eth'} width={54} height={54} />
      <div className={styles.rateData}>
        <div className={styles.rateName}>Ethereum (ETH)</div>
        <div className={styles.rateWrapper}>
          <div className={styles.rateAmount}>$3,257</div>
          <div className={styles.ratePercentGreen}>2.32%</div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyRateItem;
