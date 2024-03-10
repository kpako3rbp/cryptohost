import Head from 'next/head';
import React from 'react';

import Breadcrumbs from '@/features/Breadcrumbs';
import { loadCategories } from '@/pages/api/categories';
import { loadPosts } from '@/pages/api/posts';
import Layout from '@/shared/ui/Layout';
import Section from '@/shared/ui/Section';
import Title from '@/shared/ui/Title';
import Subscribe from '@/widgets/Subscribe';

import styles from './styles.module.scss';

const LOAD_MORE_STEP = 6;

const Privacy = () => {
  const paths = [
    { name: 'Главная', url: '/' },
    { name: 'Политика приватности', url: '/privacy' },
  ];

  return (
    <>
      <Head>
        <title>Политика приватности</title>
        <meta name="description" content="Crypto-host - все, что нужно знать о блокчейн и криптовалютах простыми словами. Обучающие статьи для новичков, свежие новости, обзоры проектов и другое!" />
        <meta name="image" content="/logo.png" />
      </Head>
      <Layout>
        <Breadcrumbs paths={paths}></Breadcrumbs>
        <Section noTopPadding={true}>
          <Title color={'purple'}>Политика приватности</Title>

          <div className={styles.terms}>
            <Title className={styles.termsTitle} type={'small'}>
              Привет!
            </Title>
            <p>
              Мы считаем, что приватность в интернете нужна каждому. Хотя политику приватности читают не все, мы будем
              принимать все разумные меры, чтобы защитить любые личные данные, которые вы нам можете предоставить.
            </p>
            <p>Под «мы» или «сайтом» понимается сайт crypto-host.net, онлайн-журнал о криптовалютах и блокчейне.</p>
            <p>
              «Пользователь» или «вы» — это любой человек, который пользуется сайтом. «Политика приватности» или
              «Политика» — это политика приватности сайта.
            </p>
            <p>
              Эта Политика приватности и Условия использования вместе представляют собой юридически обязывающее
              соглашение. Заходя на сайт или используя его, вы соглашаетесь с ними. Если вы не согласны с Политикой
              приватности или Условиями использования, пожалуйста, не заходите на сайт.
            </p>
            <Title className={styles.termsTitle} type={'small'}>
              Изменения в политике приватности
            </Title>
            <p>
              Мы можем изменять, дополнять и иным образом менять эту Политику без предварительного уведомления.
              Изменения вступают в силу с момента размещения новой версии Политики на сайте. Посещая сайт после внесения
              изменений в Политику, вы соглашаетесь с изменениями.
            </p>
            <Title className={styles.termsTitle} type={'small'}>
              Сбор данных
            </Title>
            <p>
              Часть данных вы предоставляете осознанно, используя определенные части сайта. Часть данных собирается
              автоматически. Некоторые опции сайта (например, голосование, подписка на уведомления, комментарии)
              доступны, только если вы представите некоторые данные (имя, возраст, адрес почты, телефонный номер и
              т.д.).
            </p>
            <p>
              Также для доступа к нашему контенту вы можете регистрироваться через свои социальные сети. В этом случае
              мы можем получить доступ к некоторым данным вашего профиля, в том числе вашему имени, email, адресу, фото,
              гендеру, дню рождения, месту проживания, фотографиям, видеозаписям, списку друзей, списку подписок и
              подписчиков или вашим постам и лайкам.
            </p>
            <p>
              Также мы можем автоматически собирать такие данные, как тип браузера, ОС, IP-адрес, доменное имя и / или
              дату / время вашего посещения сайта.
            </p>
            <p>
              Мы можем использовать куки, но вы вправе изменить настройки браузера для отказа от автоматического
              принятия куки или оповещения об их использовании.
            </p>
            <p>
              Мы также можем использовать технологии геолокации для определения вашего текущего местоположения. Вы
              вправе отключить геолокацию в своем браузере или устройстве.
            </p>
            <Title className={styles.termsTitle} type={'small'}>
              Использование
            </Title>
            <p>Мы собираем личные данные исключительно в следующих целях:</p>
            <p>
              Предоставление технической поддержки и выполнения ваших запросов. Для выполнения требований Условий
              использования и Политики и предотвращения потенциально незаконной деятельности на сайте.
            </p>
            <p>Для обеспечения вашей безопасности.</p>
            <p>Для кастомизации и персонализации контента (таргетированная реклама и т.п.).</p>
            <p>Для внутреннего анализа того, как вы пользуетесь сайтом, чтобы его улучшить.</p>
            <Title className={styles.termsTitle} type={'small'}>
              Обработка данных
            </Title>
            <p>Мы соблюдаем требования законодательства, а поэтому:</p>
            <p>Обрабатываем личные данные честно и в рамках закона.</p>
            <p>Собираем личные данные только в вышеуказанных целях и в разумном объеме.</p>
            <p>
              Обрабатываем личные данные, только если это необходимо для выполнения требований Политики и Условий
              использования, юридического обязательства или в целях наших легитимных интересов, если они не противоречат
              вашим интересам конфиденциальности.
            </p>
            <Title className={styles.termsTitle} type={'small'}>
              Предоставление данных третьим сторонам и управление сайтом
            </Title>
            <p>
              Мы не предоставляем ваши личные данные третьим сторонам иначе как для оказания технической поддержки и в
              случаях, предусмотренных законодательством. В остальных случаях мы запрашиваем ваше согласие на
              предоставление данных третьим сторонам.
            </p>
            <Title className={styles.termsTitle} type={'small'}>
              Безопасность
            </Title>
            <p>
              Мы используем несколько технологий и процессов для защиты личных данных пользователя от
              несанкционированного доступа, использования или разглашения. Тем не менее мы понимаем, что в мире нет
              способа гарантированно устранить подобные риски. В случае взлома мы не несем ответственности за незаконные
              действия третьих лиц, хакеров, взломщиков и других нарушителей условий этой Политики, которые могут
              попытаться завладеть личными данными частично или полностью либо использовать их в собственных целях.
            </p>
            <p>
              Также мы не несем ответственности за контент, взятый с нашего сайта третьими лицами без нашего разрешения.
            </p>
            <Title className={styles.termsTitle} type={'small'}>
              Доступ, обновление и удаление личных данных
            </Title>
            <p>
              Если захотите изменить, обновить или удалить любые свои личные данные на нашем сайте, напишите по адресу
              info@crypto-host.net.
            </p>
            <p>
              Согласно законам ЕС, европейские пользователи имеют право запросить у нас отчет обо всех своих личных
              данных, которые мы храним. В определенных обстоятельствах они могут запросить удаление своих данных.
            </p>
            <p>Если у вас есть вопросы об этой Политике, свяжитесь с нами по адресу info@crypto-host.net.</p>
          </div>
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

export default Privacy;
