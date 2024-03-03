import Head from 'next/head';
import React, { useState } from 'react';

import Layout from '@/shared/Layout';
import Promo from "@/widgets/Promo";

const Home = (props) => {
  const { initialPosts, total } = props;
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

export default Home;
