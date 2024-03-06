import cl from 'classnames';
import { format } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { urlFor } from '@/lib/client';
import Content from '@/shared/ui/Content';
import PixelizedImg from '@/shared/ui/PixelizedImg';
import Title from '@/shared/ui/Title';

import styles from './index.module.scss';

const Article = (props) => {
  const { children, className, post } = props;
  const date = format(new Date(post.publishedDate), 'dd MMM yyyy, HH:mm');

  return (
    <>
      <Head>
        <title>{post.meta_title}</title>
      </Head>

      <article className={cl(className, styles.article)}>
        <Title className={styles.articleTitle}>{post.title}</Title>
        <div className={styles.articleInfo}>
          <Link className={styles.articleCategory} href={`/${encodeURIComponent(post.categorySlug.current)}`}>
            {post.category}
          </Link>{' '}
          / {date}
        </div>
        <Link href={`news/${encodeURIComponent(post.slug.current)}`}>
          <PixelizedImg
            className={styles.articleImg}
            src={urlFor(post.image).url()}
            alt={''}
            pixelScale={13}
          ></PixelizedImg>
        </Link>
        <Content body={post.body} className={styles.articleContent} />
      </article>
    </>
  );
};

export default Article;
