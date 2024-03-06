import axios from 'axios';
import { useEffect, useState } from 'react';

import { addPosts } from '@/slices/postsSlice';

const useLoadMore = async (route, params, action) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(route, { params });
        setData(response.data);

        setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
        action();
      } catch (err) {
        setError(err);
        console.error(err); // TODO: добавить всплывающие подсказки для ошибок и прочего
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [route, params]);

  return { data, loading, error };
};

export default useLoadMore;
