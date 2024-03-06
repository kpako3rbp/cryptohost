import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const PostGrid = (props) => {
  const { children, className, hasMainPost = true } = props;

  const postGridClassNames = cl(className, styles.postGrid, {
    [styles.postGridHasMain]: hasMainPost,
  });

  return <div className={postGridClassNames}>{children}</div>;
};

export default PostGrid;
