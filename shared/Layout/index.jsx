import cl from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '@/widgets/Sidebar';
import Header from '@/widgets/Header';

import styles from './index.module.scss';

const Layout = (props) => {
  const { children } = props;
  // const [isModalOpen, setIsModalOpen] = useState();
  const IsModalOpen = useSelector((state) => state.modalState.isOpen);

  const layoutClassNames = cl(styles.layout, {
    [styles.layoutFixed]: IsModalOpen,
  });

  return (
    <div className={layoutClassNames}>
      <Header></Header>
      <Sidebar></Sidebar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
