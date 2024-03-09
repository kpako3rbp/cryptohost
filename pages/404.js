import React from 'react';

import { fetchPostsPaths, loadCurrentPost } from '@/pages/api/currentPost';
import { loadPosts } from '@/pages/api/posts';
import Layout from '@/shared/ui/Layout';

const NotFound = () => {
  return <Layout>Страница не найдена</Layout>;
};

export default NotFound;
