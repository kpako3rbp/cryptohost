import { client } from '@/lib/client';

export default async function activities(req, res) {
  const { start, end } = req.query;

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400).json({
      error: 'Data is invalid!!!',
    });
  }

  const { loadedActivities, total } = await loadActivities(start, end);

  res.status(200).json({
    activities: loadedActivities,
    total,
  });
}

export async function loadActivities(start, end) {
  const query = `{
    "activities": *[_type == "activity"] | order(publishedDate desc) [${start}...${end}] {
      _id,
      title,
      publishedDate,
      image,
      slug,
      body,
      _type
    },
    "total": count(*[_type == "activity"])
  }`;

  const { activities: loadedActivities, total } = await client.fetch(query);

  console.log(loadedActivities, total, 'loadedActivities, total');

  return {
    loadedActivities,
    total,
  };
}
