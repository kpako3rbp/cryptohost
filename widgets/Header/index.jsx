import cl from 'classnames';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import Button from '@/shared/Button';
import Container from '@/shared/Container';
import Logo from '@/shared/Logo';
import Navigation from '@/shared/Navigation';
import { openModal } from '@/slices/modalSlice';

import styles from './index.module.scss';

const Header = (props) => {
  const { children, className, sidebarIsOpen } = props;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = cl(styles.header, {
    [styles.headerScrolled]: isScrolled,
  });

  const dispatch = useDispatch();

  return (
    <header className={headerClassName}>
      <Container>
        <div className={styles.headerInner}>
          <Link href="/">
            <Logo descriptor={true} className={styles.headerLogo}></Logo>
          </Link>
          <Navigation className={styles.headerNavigation} />
          <Button color={'green'} className={styles.headerButton}>
            <FaTelegramPlane /> Подпишись!
          </Button>

          <Button className={styles.headerBurger} onClick={() => dispatch(openModal())}>
            <IoMenu />
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
