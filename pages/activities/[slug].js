import React from 'react';

import Article from '@/entities/Article';
import Post from '@/entities/Post';
import Breadcrumbs from '@/features/Breadcrumbs';
import { loadActivities } from '@/pages/api/activities';
import { fetchActivitiesPaths, loadCurrentActivity } from '@/pages/api/currentActivity';
// import { fetchPostsPaths, loadCurrentPost } from '@/pages/api/currentPost';
import { loadPosts } from '@/pages/api/posts';
import ButtonLink from '@/shared/ui/ButtonLink';
import Layout from '@/shared/ui/Layout';
import PostGrid from '@/shared/ui/PostGrid';
import Section from '@/shared/ui/Section';
import Title from '@/shared/ui/Title';
import Subscribe from '@/widgets/Subscribe';

import styles from './styles.module.scss';

const POSTS_TO_LOAD = 6;

const CurrentPost = (props) => {
  const { activity, sameCategoryPosts } = props;
  // const { title, category, categorySlug, publishedDate, image, slug, body } = post;

  const paths = [
    { name: 'Главная', url: '/' },
    { name: 'Криптоактивности', url: '/activities' },
    { name: activity.title, url: `/activities/${encodeURIComponent(activity.slug.current)}` },
  ];

  return (
    <Layout>
      <Breadcrumbs paths={paths}></Breadcrumbs>
      <Section noTopPadding={true}>
        <Article post={activity} directory={'activities'}></Article>
      </Section>
      <Section>
        <Subscribe />
      </Section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await fetchActivitiesPaths();

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const activity = await loadCurrentActivity(slug);

  return {
    props: {
      activity,
    },
  };
}

export default CurrentPost;
