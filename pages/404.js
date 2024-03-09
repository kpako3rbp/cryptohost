import React from 'react';

import { fetchPostsPaths, loadCurrentPost } from '@/pages/api/currentPost';
import { loadPosts } from '@/pages/api/posts';
import Section from '@/shared/ui/Section';
import NotFoundBlock from "@/shared/ui/NotFoundBlock";
import Layout from '@/shared/ui/Layout';

const NotFound = () => {
  return (
    <Layout>
      <Section>
        <NotFoundBlock />
      </Section>
    </Layout>
  );
};

export default NotFound;
