import cl from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';
import Container from "@/shared/ui/Container";

const Breadcrumbs = (props) => {
  const { children, className, paths } = props;

  // const breadcrumbsClassName = cl(s)

  return (
    <Container>
      <ul className={styles.breadcrumbs}>
        {paths.map((path, index) => (
          <li key={index}>
            <Link href={path.url}>{path.name}</Link>
            {index !== paths.length - 1 && <>&nbsp;/&nbsp;</>}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Breadcrumbs;
