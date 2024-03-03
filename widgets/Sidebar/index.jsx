import cl from 'classnames';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
// import { setTheme } from './menuSlice';
import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

import Button from '@/shared/Button';
import Navigation from '@/shared/Navigation';
import Window from '@/shared/Window';

import styles from './index.module.scss';

const Sidebar = (props) => {
  const { className } = props;
  const IsModalOpen = useSelector((state) => state.modalState.isOpen);

  return (
    <Window header={'Menu'} isOpen={IsModalOpen}>
      <aside className={styles.sidebar}>
        <div>
          <Navigation className={styles.sidebarNav}></Navigation>
        </div>
        <Button color={'green'} className={styles.sidebarButton}>
          <FaTelegramPlane /> Подпишись!
        </Button>
      </aside>
    </Window>
  );
};

export default Sidebar;
