import cl from 'classnames';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import Button from '@/shared/ui/Button';
import Container from '@/shared/ui/Container';
import Logo from '@/shared/ui/Logo';
import Navigation from '@/shared/ui/Navigation';
import { openModal } from '@/slices/modalSlice';
import ButtonLink from "@/shared/ui/ButtonLink";

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

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = cl(className, styles.header, {
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
          <ButtonLink href={'https://t.me/kpako3rbp'} target={'blank'} color={'green'} className={styles.headerButton}>
            <FaTelegramPlane /> Подпишись!
          </ButtonLink>

          <Button className={styles.headerBurger} tool={true} color={'gray'} onClick={() => dispatch(openModal())}>
            <IoMenu />
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
