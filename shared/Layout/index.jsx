import cl from 'classnames';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, setTheme } from '@/slices/themeSlice';

import ThemeToggler from '@/features/ThemeToggler';
import Footer from '@/widgets/Footer';
import Header from '@/widgets/Header';
import Sidebar from '@/widgets/Sidebar';

import styles from './index.module.scss';

const Layout = (props) => {
  const { children } = props;
  const dispatch = useDispatch();
  // const [isModalOpen, setIsModalOpen] = useState();
  const isModalOpen = useSelector((state) => state.modalState.isOpen);
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
    }
  }, [dispatch]);

/*  useEffect(() => {
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  }, [theme]);*/

  const layoutClassNames = cl(styles.layout, {
    [styles.layoutFixed]: isModalOpen,
    [styles.layoutDarkTheme]: theme === 'dark',
  });

  return (
    <div className={layoutClassNames}>
      <Header />
      <Sidebar />
      <main className={styles.layoutMain}>{children}</main>
      <Footer />

      <ThemeToggler />
    </div>
  );
};

export default Layout;
