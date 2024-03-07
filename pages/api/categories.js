import { client } from '@/lib/client';

export default async function categories(req, res) {
  const { loadedCategories } = await loadCategories();

  res.status(200).json({
    categories: loadedCategories,
  });
}

export async function loadCategories() {
  const query = `*[_type == "category"] | order(name) {name, slug}`;
  const loadedCategories = await client.fetch(query);

  return {
    categories: loadedCategories,
  };
}
