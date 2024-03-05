import cl from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

import { getCurrencyRates } from '@/pages/api/currencyRates';
import CurrencyRateItem from '@/shared/CurrencyRateItem';
import GriddedCard from '@/shared/GriddedCard';
import Section from '@/shared/Section';
import { updateRates, updateResponseTime } from '@/slices/currencyRatesSlice';

import styles from './index.module.scss';

const RATES_UPDATE_INTERVAL = 60000;

const CurrencyRates = (props) => {
  const { children, className, hasTitle = true } = props;
  const dispatch = useDispatch();
  const { rates, updateTime } = useSelector((state) => state.currencyRates);

  useEffect(() => {
    const fetchData = async () => {
      const currentTime = new Date();
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      const formattedTime = { hours, minutes };

      dispatch(updateResponseTime(formattedTime));

      const data = await getCurrencyRates();
      dispatch(updateRates(data));
    };

    fetchData();

    const interval = setInterval(fetchData, RATES_UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, [dispatch]);

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
    rates && (
      <div className={cl(className, styles.rates)}>
        {hasTitle && (
          <h3 className={styles.ratesTitle}>
            Курсы криптовалют / обновлено {updateTime.hours} <span className={styles.ratesDots}>:</span>{' '}
            {updateTime.minutes}
          </h3>
        )}
        <GriddedCard className={styles.ratesCard}>
          <Slider {...sliderSettings}>
            {rates.map((rate) => (
              <CurrencyRateItem data={rate} key={rate.shortName} />
            ))}
          </Slider>
        </GriddedCard>
      </div>
    )
  );
};

export default CurrencyRates;
