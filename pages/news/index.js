import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainPost from '@/entities/MainPost';
import Post from '@/entities/Post';
import Breadcrumbs from '@/features/Breadcrumbs';
import Categories from '@/features/Categories';
import { loadCategories } from '@/pages/api/categories';
import { loadPosts } from '@/pages/api/posts';
import Button from '@/shared/ui/Button';
import Layout from '@/shared/ui/Layout';
import PageDescriptor from '@/shared/ui/PageDescriptor';
import PostGrid from '@/shared/ui/PostGrid';
import Section from '@/shared/ui/Section';
import Title from '@/shared/ui/Title';
import { addPosts, setCategories, setPosts } from '@/slices/postsSlice';
import Subscribe from '@/widgets/Subscribe';

import styles from './styles.module.scss';

const LOAD_MORE_STEP = 6;

const News = (props) => {
  const { initialPosts, total, categoriesList, currentPostsCategories } = props;
  const dispatch = useDispatch();

  // console.log('initialPosts999999999', initialPosts)

  const router = useRouter();
  const { category } = router.query;
  const initCategory = category || [];

  // console.log('initCategory', initCategory);

  useEffect(() => {
    dispatch(setPosts({ posts: initialPosts, total, categories: currentPostsCategories }));
    dispatch(setCategories(initCategory));
  }, [dispatch, initialPosts]);

  const paths = [
    { name: 'Главная', url: '/' },
    { name: 'Новости', url: '/news' },
  ];

  const { posts, categories: currentCategories, total: totalPosts } = useSelector((state) => state.postsData);
  const mainPost = posts[0] || initialPosts[0];

  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP + 1); // Потому что еще главный пост
  const [loading, setLoading] = useState(false);

  const isLoadButton = totalPosts > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('/api/posts', {
        params: {
          start: loadedAmount,
          end: loadedAmount + LOAD_MORE_STEP,
          categories: JSON.stringify(currentCategories),
        },
      });

      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      dispatch(addPosts(data));
    } catch (err) {
      console.error(err); // TODO: добавить всплывающие подсказки для ошибок и прочего
    } finally {
      setLoading(false);
    }
  };

  // TODO вместо Link на категориях попробовать сделать функцию, которая будет включать нужную категорию. То есть перенести getPostsByCategories сюда

  return (
    <>
      <Head>
        <title>Новости</title>
      </Head>
      <Layout>
        <Breadcrumbs paths={paths}></Breadcrumbs>
        <Section noTopPadding={true}>
          <Title color={'purple'}>Текущие новости</Title>
          <PageDescriptor>
            Все, что актуально для крипторынка в 2023-ем и формирует тренды на 2024. Читайте новости ежедневно,
            подписывайтесь на{' '}
            <Link href={'https://t.me/kpako3rbp'} target="_blank">
              наш канал
            </Link>{' '}
            , чтобы не пропустить ни одной полезной новости.
          </PageDescriptor>
          <Categories categories={categoriesList} initCategory={initCategory} />
        </Section>

        <Section noTopPadding={true}>
          <PostGrid className={styles.newsPostGrid}>
            <MainPost {...mainPost} directory={'news'} />
            {posts.slice(1).map((post) => (
              <Post key={post.slug.current} {...post} directory={'news'} />
            ))}

            {isLoadButton && (
              <Button onClick={getMorePosts} disabled={loading}>
                Загрузить еще ↓
              </Button>
            )}
          </PostGrid>
        </Section>

        <Section>
          <Subscribe />
        </Section>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { category } = context.query; // Получаем значение параметра запроса category
  const initCategory = category ? [category] : [];

  const {
    loadedPosts,
    total,
    postsCategories: currentPostsCategories,
  } = await loadPosts(0, LOAD_MORE_STEP + 1, JSON.stringify(initCategory)); // на один пост больше, потому что еще есть главный пост   , JSON.stringify(initCategory)

  const { categories: categoriesList } = await loadCategories();
  return {
    props: {
      initialPosts: loadedPosts,
      total,
      currentPostsCategories,
      categoriesList,
    },
  };
};

export default News;
