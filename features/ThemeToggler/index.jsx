import cl from 'classnames';
import React from 'react';
import { ImContrast } from 'react-icons/im';
import { useDispatch } from 'react-redux';

import Button from '@/shared/Button';
import { toggleTheme } from '@/slices/themeSlice';

import styles from './index.module.scss';

const ThemeToggler = (props) => {
  const { children, className } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <Button className={styles.themeToggler} tool={true} color={'gray'} onClick={handleClick}>
      <ImContrast />
    </Button>
  );
};

export default ThemeToggler;
