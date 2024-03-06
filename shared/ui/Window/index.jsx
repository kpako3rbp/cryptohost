import cl from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import ToolButton from '@/shared/ui/ToolButton';
import { closeModal } from '@/slices/modalSlice';

import styles from './index.module.scss';

const Window = (props) => {
  const { children, className, header, isOpen } = props;
  const dispatch = useDispatch();

  const windowOverlayClassName = cl({
    [styles.overlay]: isOpen,
  });
  const windowClassName = cl(styles.window, {
    [styles.windowActive]: isOpen,
  });

  return (
    <div className={windowOverlayClassName}>
      <div className={styles.overlayInner}>
        <div className={windowClassName}>
          <div className={styles.windowHeader}>
            {header}
            <ToolButton onClick={() => dispatch(closeModal())}>
              <IoClose />
            </ToolButton>
          </div>
          <div className={styles.windowInner}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Window;
