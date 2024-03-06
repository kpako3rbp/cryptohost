import cl from 'classnames';
import Image from 'next/image';
import React from 'react';

import styles from './index.module.scss';

const CurrencyRateItem = (props) => {
  const { className, children, data } = props;
  const { name, shortName, price, dayPercent, isPositive } = data || {};

  const dayPercentClassName = cl({
    [styles.ratePercentGreen]: isPositive,
    [styles.ratePercentPink]: !isPositive,
  });

  return (
    data && (
      <div className={cl(className, styles.rate)}>
        <Image className={styles.rateImg} src={`/coins/${shortName}.svg`} alt={shortName} width={54} height={54} />
        <div className={styles.rateData}>
          <div className={styles.rateName}>
            {name} {`(${shortName.toUpperCase()})`}
          </div>
          <div className={styles.rateWrapper}>
            <div className={styles.rateAmount}>{price}</div>
            <div className={dayPercentClassName}>{dayPercent}%</div>
          </div>
        </div>
      </div>
    )
  );
};

export default CurrencyRateItem;
