import React from 'react';
import { ImContrast } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/shared/ui/Button';
import { toggleTheme } from '@/slices/themeSlice';

import styles from './index.module.scss';

const ThemeToggler = () => {
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const handleClick = () => {
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    dispatch(toggleTheme());
  };

  return (
    <Button className={styles.themeToggler} tool={true} color={'gray'} onClick={handleClick}>
      <ImContrast />
    </Button>
  );
};

export default ThemeToggler;
