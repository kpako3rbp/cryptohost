import cl from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

import { closeModal } from '@/slices/modalSlice';

import styles from './index.module.scss';

const Navigation = (props) => {
  const { className } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const links = [
    {
      name: 'Главная',
      route: '/',
    },
    {
      name: 'Новости',
      route: '/news',
    },
    {
      name: 'Криптоактивности',
      route: '/activities',
    },
  ];

  return (
    <nav className={cl(className, styles.nav)}>
      <ul>
        {links.map((link) => {
          const linkClassName = router.pathname === link.route ? styles.navActive : '';

          return (
            <li key={link.route} className={linkClassName}>
              <Link href={link.route} className={linkClassName} onClick={() => dispatch(closeModal())}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
