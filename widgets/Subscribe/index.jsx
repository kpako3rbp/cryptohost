import cl from 'classnames';
import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

import BitcoinImage from '@/shared/BitcoinImage';
import ButtonLink from '@/shared/ButtonLink';
import GriddedCard from '@/shared/GriddedCard';
import Logo from '@/shared/Logo';
import Title from '@/shared/Title';
import XImage from '@/shared/XImage';

import styles from './index.module.scss';
import TelegramImage from "@/shared/TelegramImage";

const Subscribe = (props) => {
  const { children, className } = props;
  return (
    <GriddedCard className={styles.subscribeCard}>
      <Logo className={styles.subscribeCardLogo}></Logo>
      <Title type={'small'} className={styles.subscribeCardTitle}>Подпишитесь на наш телеграм, чтобы узнавать все новости из криптомира первыми!</Title>
      <ButtonLink href={'https://t.me/kpako3rbp'} color={'green'} className={styles.subscribeCardButton}>
        <FaTelegramPlane /> Подписаться
      </ButtonLink>
      <BitcoinImage className={styles.subscribeCardBitcoin} />
      <XImage className={styles.subscribeCardX} />
      <TelegramImage className={styles.subscribeCardTelegram} />
    </GriddedCard>
  );
};

export default Subscribe;
