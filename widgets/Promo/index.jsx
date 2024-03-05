import cl from 'classnames';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { urlFor } from '@/lib/client';
import BitcoinImage from '@/shared/BitcoinImage';
import ButtonLink from '@/shared/ButtonLink';
import EthereumImage from '@/shared/EthereumImage';
import PixelizedImage from '@/shared/PixelizedImg';
import Section from '@/shared/Section';
import Title from '@/shared/Title';
import XImage from '@/shared/XImage';

import styles from './index.module.scss';

const Promo = (props) => {
  const { children, className } = props;
  const data = useSelector((state) => state.promoBanner.data);
  const { title, description, image, slug, url } = data || {};

  if (!data) {
    return null;
  }

  return (
    <div className={styles.promo}>
      <div className={styles.promoWrapper}>
        <div className={styles.promoText}>
          <Title className={styles.promoTitle} type={'main'}>
            {title}
          </Title>
          <p className={styles.promoDescr}>{description}</p>
          <ButtonLink href={slug || url} color={'green'} className={styles.promoButton}>
            Подробности
          </ButtonLink>
        </div>
        <div className={styles.promoImageWrapper}>
          <EthereumImage className={styles.promoEthereum} />
          <BitcoinImage className={styles.promoBitcoin} />
          <XImage className={styles.promoX} />
          {image && <PixelizedImage src={urlFor(image).url()} alt="" className={styles.promoImage} pixelScale={13} />}
        </div>
      </div>
    </div>
  );
};

export default Promo;
