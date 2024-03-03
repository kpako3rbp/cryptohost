import cl from 'classnames';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonLink from '@/shared/ButtonLink';
import PixelizedImage from '@/shared/PixelizedImg';
import Section from '@/shared/Section';
import Title from '@/shared/Title';
// import {urlFor} from "@/lib/client";

import styles from './index.module.scss';

const Promo = (props) => {
  const { children, className } = props;
  const data = useSelector((state) => state.promoBanner.data);
  const { title, description, image, slug, url } = data || {};

  console.log(image)

  return (
    <Section className={styles.promo}>
      <div className={styles.promoWrapper}>
        <div className={styles.promoText}>
          <Title className={styles.promoTitle} type={'main'}>
            {title}
          </Title>
          <p className={styles.promoDescr}>{description}</p>
          <ButtonLink href={slug ?? url ?? '/'} color={'green'} className={styles.promoButton}>
            Подробности
          </ButtonLink>
        </div>
        <div className={styles.promoImageWrapper}>
          <div src={'/ethereum-01.png'} alt={'eth'} className={styles.promoDecor} />
          <div src={'/bitcoin-01.png'} alt={'btc'} className={styles.promoDecor} />
          <div src={'/x.png'} alt={'x'} className={styles.promoDecor} />
          <PixelizedImage src={'/promo.jpg'} alt="" className={styles.promoImage} />
        </div>
      </div>
    </Section>
  );
};

export default Promo;
