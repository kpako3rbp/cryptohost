import cl from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import ThemeToggler from '@/features/ThemeToggler';
import { setTheme } from '@/slices/themeSlice';
import Footer from '@/widgets/Footer';
import Header from '@/widgets/Header';
import Sidebar from '@/widgets/Sidebar';

import styles from './index.module.scss';

const Layout = (props) => {
  const { children, isHomePage = false } = props;
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

  const layoutClassNames = cl(styles.layout, {
    [styles.layoutFixed]: isModalOpen,
    [styles.layoutDarkTheme]: theme === 'dark',
    [styles.layoutLightTheme]: theme === 'light',
  });

  const headerClassNames = cl({
    [styles.layoutHeaderUnderline]: !isHomePage,
  });

  return (
    <div className={layoutClassNames}>
      <Header className={headerClassNames} />
      <Sidebar />
      <main className={styles.layoutMain}>{children}</main>
      <Footer />

      <ThemeToggler />
      <ToastContainer/>
    </div>
  );
};

export default Layout;
