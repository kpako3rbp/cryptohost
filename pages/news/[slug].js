import { format } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

// import { Article, Content, Title } from '@/components';
import Article from '@/entities/Article';
import Breadcrumbs from '@/features/Breadcrumbs';
import { client, urlFor } from '@/lib/client';
import { loadCurrentPost, fetchPostsPaths } from '@/pages/api/currentPost';
import Content from '@/shared/ui/Content';
import Layout from '@/shared/ui/Layout';
import PixelizedImg from '@/shared/ui/PixelizedImg';
import Section from '@/shared/ui/Section';
import Title from '@/shared/ui/Title';
import Subscribe from '@/widgets/Subscribe';

import styles from './styles.module.scss';

const Post = (props) => {
  const { post } = props;
  // const { title, category, categorySlug, publishedDate, image, slug, body } = post;

  const paths = [
    { name: 'Главная', url: '/' },
    { name: 'Новости', url: '/news' },
    { name: post.category, url: `/${encodeURIComponent(post.categorySlug.current)}` },
    { name: post.title, url: `/news/${encodeURIComponent(post.slug.current)}` },
  ];

  return (
    <Layout>
      <Breadcrumbs paths={paths}></Breadcrumbs>
      <Section noTopPadding={true}>
        <Article post={post}></Article>
      </Section>
      <Section>
        <Subscribe />
      </Section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await fetchPostsPaths();

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(props) {
  const {
    params: { slug },
  } = props;

  const post = await loadCurrentPost(slug);

  return {
    props: {
      post,
    },
  };
}

export default Post;
