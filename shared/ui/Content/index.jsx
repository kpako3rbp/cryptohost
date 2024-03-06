import BlockContent from '@sanity/block-content-to-react';
import cl from 'classnames';
import React from 'react';

import { clientConfig } from '@/lib/client';

import styles from './index.module.scss';

const Content = (props) => {
  const { className, body } = props;

  return (
    <div className={cl(styles.content, className)}>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 1000, h: 750, fit: 'max' }}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </div>
  );
};

export default Content;
