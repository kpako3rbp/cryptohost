import cl from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ThemeToggler from '@/features/ThemeToggler';
import Footer from '@/widgets/Footer';
import Header from '@/widgets/Header';
import Sidebar from '@/widgets/Sidebar';

import styles from './index.module.scss';

const Layout = (props) => {
  const { children } = props;
  // const [isModalOpen, setIsModalOpen] = useState();
  const IsModalOpen = useSelector((state) => state.modalState.isOpen);
  const IsDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const layoutClassNames = cl(styles.layout, {
    [styles.layoutFixed]: IsModalOpen,
    [styles.layoutDarkTheme]: IsDarkTheme,
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
