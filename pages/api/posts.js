import { client } from '@/lib/client';

export default async function posts(req, res) {
  const { start, end, categories } = req.query;

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400).json({
      error: 'Data is invalid!!!',
    });
  }

  const { loadedPosts, total, postsCategories } = await loadPosts(start, end, categories);

  res.status(200).json({
    posts: loadedPosts,
    total,
    currentPostsCategories: postsCategories,
  });
}

export async function loadPosts(start, end, categories = '', excludingPostSlug = undefined) {
  let categoryQuery = '';
  let exclusionQuery = '';

  if (categories && JSON.parse(categories).length > 0) {
    const categoryFilters = JSON.parse(categories).map((category) => `category->slug.current == '${category}'`);
    categoryQuery = ` && (${categoryFilters.join(' || ')})`;
  }

  if (excludingPostSlug) {
    exclusionQuery = ` && slug.current != '${excludingPostSlug}'`;
  }

  const query = `{
    "posts": *[_type == "post"${categoryQuery}${exclusionQuery}] | order(publishedDate desc) [${start}...${end}] {
      _id,
      title,
      'category': category->name,
      'categorySlug': category->slug.current,
      publishedDate,
      image,
      slug,
      body,
      _type
    },
    "total": count(*[_type == "post"${categoryQuery}${exclusionQuery}])
  }`;

  console.log(query);
  console.log(start, end, categories, 'start, end, categories');

  const { posts: loadedPosts, total } = await client.fetch(query);

  return {
    loadedPosts,
    total,
    postsCategories: categories,
  };
}
