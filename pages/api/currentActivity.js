import { client } from '@/lib/client';

export default async function currentActivity(req, res) {
  const { slug } = req.query;

  const { activity } = await loadCurrentActivity(slug);

  res.status(200).json({
    activity,
  });
}

async function fetchActivitiesPaths() {
  const query = `*[type == "activity"] {
    slug {
      current
    }
  }`;

  const activities = await client.fetch(query);

  return activities.map((activity) => ({
    params: {
      slug: activity.slug.current,
    },
  }));
}

async function loadCurrentActivity(slug) {
  const query = `*[_type == "activity" && slug.current == '${slug}'][0] {
    _id,
    meta_title,
    title,
    publishedDate,
    image,
    slug,
    body  
  }`;

  return await client.fetch(query);
}

export { fetchActivitiesPaths, loadCurrentActivity };
