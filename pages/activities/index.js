import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainPost from '@/entities/MainPost';
import Post from '@/entities/Post';
import Breadcrumbs from '@/features/Breadcrumbs';
import { loadActivities } from '@/pages/api/activities';
import Button from '@/shared/ui/Button';
import Layout from '@/shared/ui/Layout';
import PageDescriptor from '@/shared/ui/PageDescriptor';
import PostGrid from '@/shared/ui/PostGrid';
import Section from '@/shared/ui/Section';
import Title from '@/shared/ui/Title';
import { addActivities, setActivities } from '@/slices/activitiesSlice';
import Subscribe from '@/widgets/Subscribe';

import styles from './styles.module.scss';

const LOAD_MORE_STEP = 6;

const Activities = (props) => {
  const { initialActivities, total } = props;
  const dispatch = useDispatch();

  // console.log('initCategory', initCategory);

  useEffect(() => {
    dispatch(setActivities({ activities: initialActivities, total }));
  }, [dispatch, initialActivities]);

  const paths = [
    { name: 'Главная', url: '/' },
    { name: 'Криптоактивности', url: '/activities' },
  ];

  const { activities, total: totalActivities } = useSelector((state) => state.activitiesData);
  const mainActivity = activities[0] || initialActivities[0];

  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP + 1); // Потому что еще главный пост
  const [loading, setLoading] = useState(false);

  const isLoadButton = totalActivities > loadedAmount;

  const getMoreActivities = async () => {
    setLoading(true);
    try {
      // Меняется роут
      const { data } = await axios.get('/api/activities', {
        params: {
          start: loadedAmount,
          end: loadedAmount + LOAD_MORE_STEP,
          // меняются параметры categories: JSON.stringify(currentCategories),
        },
      });

      setLoadedAmount(loadedAmount + LOAD_MORE_STEP); // !Зависит от конкретного состояния (само состояние, функция для установки)
      dispatch(addActivities(data)); // меняется действие
    } catch (err) {
      console.error(err); // TODO: добавить всплывающие подсказки для ошибок и прочего
    } finally {
      setLoading(false); // нужна функция для установки состояния
    }
  };

  return (
    <>
      <Head>
        <title>Криптоактивности</title>
      </Head>
      <Layout>
        <Breadcrumbs paths={paths}></Breadcrumbs>
        <Section noTopPadding={true}>
          <Title color={'purple'}>Криптоактивности</Title>
          <PageDescriptor>
            Хотите бесплатно мем-койнов? Быть в контексте и следить за инфополем, особенно в крипте это важно. Но в
            двойне полезнее, если можно при этом не много заработать. Каждую неделю рандомно мы разыгрываем мем-коины.
          </PageDescriptor>
        </Section>

        <Section noTopPadding={true}>
          <PostGrid className={styles.activitiesPostGrid}>
            <MainPost {...mainActivity} directory={'activities'} />
            {activities.slice(1).map((activity) => (
              <Post key={activity.slug.current} {...activity} directory={'activities'} />
            ))}

            {isLoadButton && (
              <Button onClick={getMoreActivities} disabled={loading}>
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

export const getServerSideProps = async () => {
  const { loadedActivities, total } = await loadActivities(0, LOAD_MORE_STEP + 1);

  return {
    props: {
      initialActivities: loadedActivities,
      total,
    },
  };
};

export default Activities;
