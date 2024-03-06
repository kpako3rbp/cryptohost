import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const ToolButton = (props) => {
  const { className, children, onClick, disabled, color = 'background' } = props;

  return (
    <button disabled={disabled} onClick={onClick} className={cl(className, styles.button)}>
      {children}
    </button>
  );
};

export default ToolButton;
