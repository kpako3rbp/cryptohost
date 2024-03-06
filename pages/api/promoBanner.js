import { client } from '@/lib/client';

export default async function promoBanner(req, res) {
  const { loadedPromoBanner } = await loadPromoBanner();

  res.status(200).json({
    promoBanner: loadedPromoBanner,
  });
}

export async function loadPromoBanner() {
  const query = `*[_type == "promoBanner"] {
    _id,
    title,
    image,
    slug,
    description,
    _type
  }`;
  const loadedPromoBanner = await client.fetch(query);

  return {
    loadedPromoBanner,
  };
}
