import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import MainPost from '@/entities/MainPost';
import Post from '@/entities/Post';
import { loadPosts } from '@/pages/api/posts';
import { loadPromoBanner } from '@/pages/api/promoBanner';
import ButtonLink from '@/shared/ui/ButtonLink';
import Layout from '@/shared/ui/Layout';
import PostGrid from '@/shared/ui/PostGrid';
import Section from '@/shared/ui/Section';
import Title from '@/shared/ui/Title';
import { setPosts } from '@/slices/postsSlice';
import { setPromoBanner } from '@/slices/promoBannerSlice';
import CurrencyRates from '@/widgets/CurrencyRates';
import Promo from '@/widgets/Promo';
import Subscribe from '@/widgets/Subscribe';

const LOAD_MORE_STEP = 6;

const Home = (props) => {
  const { promoBanner, initialPosts, total } = props;
  const [loadedPosts, setLoadedPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPromoBanner(promoBanner));
  }, [dispatch, promoBanner]);

  useEffect(() => {
    dispatch(setPosts({ posts: initialPosts, total }));
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
      <Layout isHomePage={true}>
        <Section>
          <Promo />
        </Section>
        <Section>
          <CurrencyRates />
        </Section>
        <Section>
          <Title color={'purple'}>Текущие новости</Title>
          <PostGrid>
            <MainPost {...loadedPosts[0]} directory={'news'} />
            {loadedPosts.slice(1).map((post) => (
              <Post key={post.slug.current} {...post} directory={'news'} />
            ))}
            <ButtonLink href={'/news'}>Ко всем новостям →</ButtonLink>
          </PostGrid>
        </Section>
        <Section>
          <Subscribe />
        </Section>
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const { loadedPromoBanner } = await loadPromoBanner();
  const { loadedPosts, total } = await loadPosts(0, LOAD_MORE_STEP + 1); // на один пост больше, потому что еще есть главный пост
  return {
    props: {
      promoBanner: loadedPromoBanner,
      initialPosts: loadedPosts,
      total,
    },
  };
};

export default Home;
