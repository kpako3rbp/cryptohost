import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const Button = (props) => {
  const { className, children, onClick, disabled, color = 'blue' } = props;

  const buttonClassName = cl(
    styles.button,
    { [styles.buttonBlue]: color === 'blue' },
    { [styles.buttonGreen]: color === 'green' },
  );

  return (
    <button disabled={disabled} onClick={onClick} className={cl(className, buttonClassName)}>
      {children}
    </button>
  );
};

export default Button;
