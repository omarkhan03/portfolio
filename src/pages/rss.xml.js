import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Ramimaalouf.tech',
    description: 'Ramimaalouf.tech',
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
