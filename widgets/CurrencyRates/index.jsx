import cl from 'classnames';
import React from 'react';
import Slider from 'react-slick';

import CurrencyRateItem from '@/shared/CurrencyRateItem';
import GriddedCard from '@/shared/GriddedCard';
import Section from '@/shared/Section';

import styles from './index.module.scss';

const CurrencyRates = (props) => {
  const { children, className, hasTitle = true } = props;

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Установите скорость автопрокрутки на 0
    speed: 5000, // Установите скорость прокрутки здесь
    pauseOnHover: true,
    cssEase: 'linear', // Используйте linear для плавной прокрутки
    variableWidth: true, // Включите переменную ширину слайдов
    centerMode: true, // Включите центральный режим, чтобы текущий слайд был в центре
    centerPadding: '0px', // Установите отступы, если необходимо
    swipeToSlide: true, // Позволяет пользователю перетаскивать для переключения слайдов
  };

  return (
    <Section className={cl(className, styles.rates)}>
      {hasTitle && <h3 className={styles.ratesTitle}>Курсы криптовалют / обновлено 18 : 43</h3>}
      <GriddedCard className={styles.ratesCard}>
        <Slider {...sliderSettings}>
          <CurrencyRateItem></CurrencyRateItem>
          <CurrencyRateItem></CurrencyRateItem>
          <CurrencyRateItem></CurrencyRateItem>
          <CurrencyRateItem></CurrencyRateItem>
          <CurrencyRateItem></CurrencyRateItem>
          <CurrencyRateItem></CurrencyRateItem>
          <CurrencyRateItem></CurrencyRateItem>
          <CurrencyRateItem></CurrencyRateItem>
          <CurrencyRateItem></CurrencyRateItem>
          <CurrencyRateItem></CurrencyRateItem>
          <CurrencyRateItem></CurrencyRateItem>
          <CurrencyRateItem></CurrencyRateItem>
          <CurrencyRateItem></CurrencyRateItem>
          <CurrencyRateItem></CurrencyRateItem>
        </Slider>
      </GriddedCard>
    </Section>
  );
};

export default CurrencyRates;
