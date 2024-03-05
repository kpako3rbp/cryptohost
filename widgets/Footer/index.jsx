import cl from 'classnames';
import React from 'react';
import Container from "@/shared/Container";

import styles from './index.module.scss';
import Link from "next/link";

const Footer = (props) => {
  const { children, className } = props;

  const links = [
    {
      name: 'Политика приватности',
      route: '/privacy',
    },
    {
      name: 'Условия',
      route: '/agreement',
    },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInner}>
          <div className={styles.footerCopyright}>© 2024 Cryptohost</div>

          <ul className={styles.footerNav}>
            {links.map((link) => {
              return (
                <li key={link.route} className={styles.footerLink}>
                  <Link href={link.route} className={styles.footerLink}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
