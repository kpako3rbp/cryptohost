import cl from 'classnames';
import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

import BitcoinImage from '@/shared/ui/BitcoinImage';
import ButtonLink from '@/shared/ui/ButtonLink';
import GriddedCard from '@/shared/ui/GriddedCard';
import Logo from '@/shared/ui/Logo';
import Title from '@/shared/ui/Title';
import XImage from '@/shared/ui/XImage';

import styles from './index.module.scss';
import TelegramImage from "@/shared/ui/TelegramImage";

const Subscribe = (props) => {
  const { children, className } = props;
  return (
    <GriddedCard className={styles.subscribeCard}>
      <Logo className={styles.subscribeCardLogo}></Logo>
      <Title type={'small'} className={styles.subscribeCardTitle}>Подпишитесь на наш телеграм, чтобы узнавать все новости из криптомира первыми!</Title>
      <ButtonLink href={'https://t.me/kpako3rbp'} target={'blank'} color={'green'} className={styles.subscribeCardButton}>
        <FaTelegramPlane /> Подписаться
      </ButtonLink>
      <BitcoinImage className={styles.subscribeCardBitcoin} />
      <XImage className={styles.subscribeCardX} />
      <TelegramImage className={styles.subscribeCardTelegram} />
    </GriddedCard>
  );
};

export default Subscribe;
