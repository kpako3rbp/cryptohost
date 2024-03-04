import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { loadPromoBanner } from '@/pages/api/promoBanner';
import Layout from '@/shared/Layout';
import { setPromoBanner } from '@/slices/promoBannerSlice';
import CurrencyRates from '@/widgets/CurrencyRates';
import Promo from '@/widgets/Promo';

const Home = (props) => {
  const { promoBanner } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPromoBanner(promoBanner));
  }, [dispatch, promoBanner]);

  return (
    <>
      <Head>
        <title>Cryptohost</title>
        <meta name="description" content="Крипто-блокчейн медиа" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Promo />
        <CurrencyRates />
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const { loadedPromoBanner } = await loadPromoBanner();
  return {
    props: {
      promoBanner: loadedPromoBanner,
    },
  };
};

export default Home;
