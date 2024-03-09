import cl from 'classnames';
import React from 'react';

import Card from '@/shared/ui/Card';

import styles from './index.module.scss';

const PageDescriptor = (props) => {
  const { className, children } = props;

  return (
    <Card isGridded={true} className={styles.pageDescriptor}>
      <div>
        <p className={styles.pageDescriptorInfo}>{children}</p>
      </div>
    </Card>
  );
};

export default PageDescriptor;
