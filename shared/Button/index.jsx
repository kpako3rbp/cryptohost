import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const Button = (props) => {
  const { className, children, onClick, disabled, color = 'blue', tool = false } = props;

  const buttonClassName = cl(
    styles.button,
    {
      [styles.buttonBlue]: color === 'blue',
      [styles.buttonGreen]: color === 'green',
      [styles.buttonGray]: color === 'gray',
      [styles.buttonTool]: tool,
    },
    className,
  );

  return (
    <button disabled={disabled} onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;
