import cl from 'classnames';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

import { urlFor } from '@/lib/client';
import { extractPostDescription } from '@/shared/lib/postHelpers';
import PixelizedImg from '@/shared/ui/PixelizedImg';
import Title from '@/shared/ui/Title';
import { setCategories } from '@/slices/postsSlice';

import styles from './index.module.scss';

const Post = (props) => {
  const { className, title, category, categorySlug, publishedDate, image, slug, body } = props;
  const date = format(new Date(publishedDate), 'dd MMM yyyy', { locale: ruLocale });

  const dispatch = useDispatch();

  // Создаем описание поста
  const description = extractPostDescription(body);

  return (
    title && (
      <div className={styles.post}>
        <Link href={`news/${encodeURIComponent(slug.current)}`}>
          <PixelizedImg className={styles.postImg} src={urlFor(image).url()} alt={''} pixelScale={9}></PixelizedImg>
        </Link>
        <div className={styles.postInner}>
          <div className={styles.postInfo}>
            <Link
              className={styles.postCategory}
              href={`/news?category=${categorySlug}`}
              onClick={() => dispatch(setCategories(categorySlug))}
            >
              {category}
            </Link>{' '}
            / {date}
          </div>
          <Link href={`news/${encodeURIComponent(slug.current)}`}>
            <Title type={'small'} className={styles.postTitle}>
              {title}
            </Title>
          </Link>
          <p className={styles.postText}>{description}</p>
        </div>
      </div>
    )
  );
};

export default Post;
