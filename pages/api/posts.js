import { client } from '@/lib/client';

export default async function posts(req, res) {
  const { start, end } = req.query;

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400).json({
      error: 'Data is invalid!!!',
    });
  }

  const { loadedPosts, total } = await loadPosts(start, end);

  res.status(200).json({
    posts: loadedPosts,
    total,
  });
}

export async function loadPosts(start, end) {
  const query = `{
  "posts": *[_type == "post"] | order(publishedDate desc) [${start}...${end}] {
    _id,
    title,
    'category': category->name,
    'categorySlug': category->slug,
    publishedDate,
    image,
    slug,
    body,
    _type
  },
  "total": count(*[_type == "post"])
  }`;
  const { posts: loadedPosts, total } = await client.fetch(query);

  return {
    loadedPosts,
    total,
  };
}
