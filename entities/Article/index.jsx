import cl from 'classnames';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

import { urlFor } from '@/lib/client';
import Content from '@/shared/ui/Content';
import PixelizedImg from '@/shared/ui/PixelizedImg';
import Title from '@/shared/ui/Title';
import { setCategories } from '@/slices/postsSlice';

import styles from './index.module.scss';

const Article = (props) => {
  const { children, className, post, directory } = props;
  const date = format(new Date(post.publishedDate), 'dd MMM yyyy', { locale: ruLocale });
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>{post.meta_title}</title>
      </Head>

      <article className={cl(className, styles.article)}>
        <Title className={styles.articleTitle}>{post.title}</Title>
        <div className={styles.articleInfo}>
          {post.category && (
            <>
              <Link
                className={styles.articleCategory}
                href={`/news?category=${post.categorySlug.current}`}
                onClick={() => dispatch(setCategories(post.categorySlug.current))}
              >
                {post.category}
              </Link>
              {' / '}
            </>
          )}
          {date}
        </div>
        <Link href={`${directory}/${encodeURIComponent(post.slug.current)}`}>
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
