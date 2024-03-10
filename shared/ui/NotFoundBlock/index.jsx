import cl from 'classnames';
import React from 'react';

import { urlFor } from '@/lib/client';
import ButtonLink from '@/shared/ui/ButtonLink';
import PixelizedImg from '@/shared/ui/PixelizedImg';
import Title from '@/shared/ui/Title';

import styles from './index.module.scss';

const NotFoundBlock = (props) => {
  const { className, children, isGridded = false } = props;

  const cardClassNames = cl(className, styles.card, {
    [styles.cardGridded]: isGridded,
  });

  return (
    <div className={styles.notFound}>
      <PixelizedImg className={styles.notFoundImg} src={'/404.jpg'} alt={''} pixelScale={12}></PixelizedImg>
      <div className={styles.notFoundInner}>
        <Title color={'purple'}>404!</Title>
        <p className={styles.notFoundText}>
          Ой! Страница не найдена. Возможно она удалена, а может ее и не было никогда...
          <br /> <br />
          Не расстраивайтесь, лучше почитайте свежие новости из мира криптовалют!
        </p>
        <ButtonLink href={'/news'} className={styles.notFoundBtn}>
          К новостям →
        </ButtonLink>
      </div>
    </div>
  );
};

export default NotFoundBlock;
