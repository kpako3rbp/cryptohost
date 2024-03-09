import axios from 'axios';

import { addActivities } from '@/slices/activitiesSlice';

export const loadMore = async (route, params) => {
  try {
    const { data } = await axios.get(route, { params });
    dispatch(addActivities(data)); // меняется действие
  } catch (err) {
    throw error(err); // TODO: добавить всплывающие подсказки для ошибок и прочего
  }
};
