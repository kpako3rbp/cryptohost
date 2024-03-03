import cl from 'classnames';
import Link from 'next/link';
import React from 'react';

import ButtonLink from '@/shared/ButtonLink';
import PixelizedImage from '@/shared/PixelizedImg';
import Section from '@/shared/Section';
import Title from '@/shared/Title';

import styles from './index.module.scss';

const Promo = (props) => {
  const { children, className } = props;
  return (
    <Section className={styles.promo}>
      <div className={styles.promoWrapper}>
        <div className={styles.promoText}>
          <Title className={styles.promoTitle} type={'main'}>
            Ежемесячный дроп мем-коинов
          </Title>
          <p className={styles.promoDescr}>Месяц до Нового Года - это отличный повод раздать немного мемасов!</p>
          <ButtonLink href={'/'} color={'green'} className={styles.promoButton}>
            Подробности
          </ButtonLink>
        </div>
        <div className={styles.promoImageWrapper}>
          <div src={'/ethereum-01.png'} alt={'eth'} className={styles.promoDecor} hasBorder={false} />
          <div src={'/bitcoin-01.png'} alt={'btc'} className={styles.promoDecor} hasBorder={false} />
          <div src={'/x.png'} alt={'x'} className={styles.promoDecor} hasBorder={false} />
          <PixelizedImage src={'/promo.jpg'} alt="" className={styles.promoImage} />
        </div>
      </div>
    </Section>
  );
};

export default Promo;
