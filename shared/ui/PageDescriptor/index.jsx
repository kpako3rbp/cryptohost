import cl from 'classnames';
import React from 'react';

import GriddedCard from '@/shared/ui/GriddedCard';

import styles from './index.module.scss';

const PageDescriptor = (props) => {
  const { className, children } = props;

  return (
    <GriddedCard className={styles.pageDescriptor}>
      <div>
        <p className={styles.pageDescriptorInfo}>{children}</p>
      </div>
    </GriddedCard>
  );
};

export default PageDescriptor;
