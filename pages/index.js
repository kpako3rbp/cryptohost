import Head from 'next/head';
import React, { useState, useEffect } from 'react';

import { loadPromoBanner } from '@/pages/api/promoBanner';
import Layout from '@/shared/Layout';
import Promo from '@/widgets/Promo';
import {useDispatch} from "react-redux";
import {setPromoBanner} from "@/slices/promoBannerSlice";

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
        <Promo></Promo>
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
