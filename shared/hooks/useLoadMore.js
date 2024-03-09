import axios from 'axios';
import { useEffect, useState } from 'react';

const useMoreLoader = (initialLoadAmount, loadStep, loadPostsAPI) => {
  const [posts, setPosts] = useState([]);
  const [loadedAmount, setLoadedAmount] = useState(initialLoadAmount);
  const [loading, setLoading] = useState(false);

  const loadMorePosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(loadPostsAPI, {
        params: {
          start: loadedAmount,
          end: loadedAmount + loadStep,
        },
      });

      setPosts([...posts, ...data]);
      setLoadedAmount(loadedAmount + loadStep);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadInitialPosts = async () => {
      await loadMorePosts();
    };
    loadInitialPosts();
  }, []);

  return { posts, loading, loadMorePosts };
};

export default useMoreLoader;
