import cl from 'classnames';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { urlFor } from '@/lib/client';
import BitcoinImage from '@/shared/ui/BitcoinImage';
import ButtonLink from '@/shared/ui/ButtonLink';
import EthereumImage from '@/shared/ui/EthereumImage';
import PixelizedImage from '@/shared/ui/PixelizedImg';
import Section from '@/shared/ui/Section';
import Title from '@/shared/ui/Title';
import XImage from '@/shared/ui/XImage';

import styles from './index.module.scss';

const Promo = (props) => {
  const { children, className } = props;
  const data = useSelector((state) => state.promoBanner.data);
  const { title, description, image, slug, url, _type } = data || {};

  return (
    data && (
      <div className={styles.promo}>
        <div className={styles.promoWrapper}>
          <div className={styles.promoText}>
            <Title className={styles.promoTitle} type={'main'}>
              {title}
            </Title>
            <p className={styles.promoDescr}>{description}</p>
            <ButtonLink
              href={url ?? `/activities/${encodeURIComponent(slug.current)}`}
              color={'green'}
              className={styles.promoButton}
            >
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
    )
  );
};

export default Promo;
