import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { showNotification } from '@/shared/lib/userNotifications';

const useContentLoader = (entityName, loadMoreStep, setLoadedCount, addEntities, additionalParams = {}) => {
  const { loaded } = useSelector((state) => state[`${entityName}Data`]);

  const [loadedAmount, setLoadedAmount] = useState(loaded);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoadedAmount(loaded);
  }, [loaded]);

  const loadData = async () => {
    setLoading(true);
    try {
      const { data: newData } = await axios.get(`/api/${entityName}`, {
        params: {
          start: loadedAmount,
          end: loadedAmount + loadMoreStep,
          ...additionalParams,
        },
      });

      setLoadedAmount(loadedAmount + newData[entityName].length);
      setLoadedCount(loadedAmount + newData[entityName].length);
      addEntities(newData);
    } catch (err) {
      showNotification('error', '😩 Что-то пошло не так, попробуйте еще раз');
    } finally {
      setLoading(false);
    }
  };

  return { loading, loadData };
};

export default useContentLoader;
