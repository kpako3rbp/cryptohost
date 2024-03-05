import cl from 'classnames';
import { format } from 'date-fns';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { urlFor } from '@/lib/client';
import ButtonLink from '@/shared/ButtonLink';
import { extractPostDescription } from '@/shared/lib/postHelpers';
import PixelizedImg from '@/shared/PixelizedImg';
import Title from '@/shared/Title';

import styles from './index.module.scss';

const MainPost = (props) => {
  const { className, index, title, category, categorySlug, publishedDate, image, slug, body } = props;
  const date = format(new Date(publishedDate), 'dd MMM, yyyy');

  const [maxCharacters, setMaxCharacters] = useState(400);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1200 && window.innerWidth > 992) {
        setMaxCharacters(200);
      } else {
        setMaxCharacters(400);
      }
    }

    window.addEventListener('resize', handleResize);

    // Убираем слушатель событий при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Пустой массив зависимостей гарантирует, что этот эффект будет выполнен только при монтировании компонента

  // Создаем описание поста
  const description = extractPostDescription(body, maxCharacters);

  return (
    title && (
      <div className={styles.post}>
        <Link href={`post/${encodeURIComponent(slug.current)}`}>
          <PixelizedImg className={styles.postImg} src={urlFor(image).url()} alt={''} pixelScale={12}></PixelizedImg>
        </Link>
        <div className={styles.postInner}>
          <div>
            <div className={styles.postInfo}>
              <Link className={styles.postCategory} href={`/${encodeURIComponent(categorySlug.current)}`}>
                {category}
              </Link>{' '}
              / {date}
            </div>
            <Link href={`post/${encodeURIComponent(slug.current)}`}>
              <Title type={'small'} className={styles.postTitle}>
                {title}
              </Title>
            </Link>
            <p className={styles.postText}>{description}</p>
          </div>

          <ButtonLink className={styles.postButton} href={`post/${encodeURIComponent(slug.current)}`}>
            Читать →
          </ButtonLink>
        </div>
      </div>
    )
  );
};

export default MainPost;
