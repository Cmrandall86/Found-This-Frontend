import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'szt6zdnb', // Replace with your actual project ID
  dataset: 'production',
  apiVersion: '2023-01-01', // Use a date string in YYYY-MM-DD format
  useCdn: true, // `false` for real-time data, `true` for faster, cached data
});

export const fetchArticles = async () => {
  const query = '*[_type == "article"]';
  return await client.fetch(query);
};