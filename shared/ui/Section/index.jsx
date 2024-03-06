import cl from 'classnames';
import React from 'react';

import Container from '@/shared/ui/Container';

import styles from './index.module.scss';

const Section = (props) => {
  const { children, className, noTopPadding = false } = props;

  const sectionClassName = cl(className, styles.section, {
    [styles.sectionWithoutTopPadding]: noTopPadding,
  });

  return (
    <section className={sectionClassName}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
