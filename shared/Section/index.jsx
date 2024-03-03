import cl from 'classnames';
import React from 'react';

import Container from '@/shared/Container';

import styles from './index.module.scss';

const Section = (props) => {
  const { children, className } = props;

  return (
    <section className={cl(className, styles.section)}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
