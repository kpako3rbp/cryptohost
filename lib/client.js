import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const clientConfig = {
  projectId: 'lb40liz0',
  dataset: 'production',
};

export const client = sanityClient({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-02-29',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

// const builder = imageUrlBuilder(client);

const builder = imageUrlBuilder({
  ...client.config(),
  baseUrl: 'https://cdn.sanity.io',
});

export const urlFor = (source) => builder.image(source);
