import axios from 'axios';
import cl from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showNotification } from '@/shared/lib/userNotifications';
import Button from '@/shared/ui/Button';
import Preloader from '@/shared/ui/Preloader';
import { addCategory, setLoadedCount, setPosts } from '@/slices/postsSlice';

import styles from './index.module.scss';

const POSTS_TO_LOAD = 7;

const Categories = (props) => {
  const { className, categories } = props;
  const dispatch = useDispatch();
  const { posts, categories: currentCategories } = useSelector((state) => state.postsData);

  const [loading, setLoading] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(currentCategories);

  useEffect(() => {
    setSelectedCategories(currentCategories);
    dispatch(setLoadedCount(posts.length));
  }, [currentCategories]);

  const getPostsByCategories = async (newCategory) => {
    setLoading(true);

    const isAlreadySelected = selectedCategories.includes(newCategory); //
    const updatedCategories = isAlreadySelected
      ? selectedCategories.filter((category) => category !== newCategory)
      : [...selectedCategories, newCategory];

    try {
      const { data } = await axios.get('/api/posts', {
        params: {
          start: 0,
          end: POSTS_TO_LOAD,
          categories: JSON.stringify(updatedCategories), // это обязательно! Иначе не сработает
        },
      });

      dispatch(setPosts({ posts: data.posts, total: data.total }));
      setSelectedCategories(updatedCategories);
      dispatch(addCategory(newCategory));
    } catch (err) {
      showNotification('error', '😩 Что-то пошло не так, попробуйте еще раз');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.categories}>
      {categories.map((category) => {
        const { name, slug } = category;

        const buttonClassName = cl(className, styles.categoriesBtn, {
          [styles.categoriesBtnActive]: currentCategories.includes(slug.current),
        });

        return (
          <Button
            color={'gray'}
            padding={'small'}
            key={slug.current}
            onClick={() => getPostsByCategories(slug.current)}
            disabled={loading}
            className={buttonClassName}
          >
            {name}
          </Button>
        );
      })}
      {loading && <Preloader isGLobal={true} />}
    </div>
  );
};

export default Categories;
