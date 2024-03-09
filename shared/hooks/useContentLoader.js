import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addActivities, setLoadedCount as setLoadedActivities } from '@/slices/activitiesSlice';
import { addPosts, setLoadedCount as setLoadedPosts } from '@/slices/postsSlice';

const useContentLoader = (entityName, loadMoreStep, additionalParams = {}) => {
  const reducers = {
    posts: {
      api: '/api/posts',
      addEntities: addPosts,
      setLoadedCount: setLoadedPosts,
    },
    activities: {
      api: '/api/activities',
      addEntities: addActivities,
      setLoadedCount: setLoadedActivities,
    },
  };

  const dispatch = useDispatch();
  const { loaded } = useSelector((state) => state[`${entityName}Data`]);

  const [loadedAmount, setLoadedAmount] = useState(loaded);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoadedAmount(loaded);
  }, [loaded]);

  const loadData = async () => {
    setLoading(true);
    try {
      const { data: newData } = await axios.get(reducers[entityName].api, {
        params: {
          start: loadedAmount,
          end: loadedAmount + loadMoreStep,
          ...additionalParams,
        },
      });

      dispatch(reducers[entityName].setLoadedCount(loadedAmount + newData[entityName].length));
      setLoadedAmount(loadedAmount + newData[entityName].length);
      dispatch(reducers[entityName].addEntities(newData));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, loadData };
};

export default useContentLoader;
