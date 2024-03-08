import axios from 'axios';
import cl from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/shared/ui/Button';
import { addCategory, setCategories, setPosts } from '@/slices/postsSlice';

import styles from './index.module.scss';

const POSTS_TO_LOAD = 7;

const Categories = (props) => {
  const { className, categories, initCategory } = props;
  const dispatch = useDispatch();
  const currentCategories = useSelector((state) => state.postsData.categories);

  // const initCategories = useSelector((state) => state.postsData.categories);
  // const currentCategories = initCategory ? [initCategory] : initCategories;

  const [loading, setLoading] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(currentCategories);

  useEffect(() => {
    setSelectedCategories(currentCategories);
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
      console.error(err); // TODO: добавить всплывающие подсказки для ошибок и прочего
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
    </div>
  );
};

export default Categories;
