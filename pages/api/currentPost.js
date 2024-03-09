import { client } from '@/lib/client';

export default async function currentPost(req, res) {
  const { slug } = req.query;

  const { post } = await loadCurrentPost(slug);

  res.status(200).json({
    post,
  });
}

async function fetchPostsPaths() {
  const query = `*[type == "post"] {
    slug {
      current
    }
  }`;

  const posts = await client.fetch(query);

  return posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
}

async function loadCurrentPost(slug) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0] {
    _id,
    meta_title,
    title,
    'category': category->name,
    'categorySlug': category->slug,
    publishedDate,
    image,
    slug,
    body  
  }`;

  return await client.fetch(query);
}

export { fetchPostsPaths, loadCurrentPost };
