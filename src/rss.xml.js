import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from './const';

export async function GET(context) {
  const blogPosts = await getCollection('blog')
  const projectPosts = await getCollection('project')
  
  const allPosts = [...blogPosts, ...projectPosts].sort((a, b) => 
    new Date(b.data.pubDate) - new Date(a.data.pubDate)
  )

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: allPosts.map((post) => ({
      ...post.data,
      link: post.collection === 'blog'
        ? `/blog/${post.slug}/`
        : `/project/${post.slug}/`,
    })),
  })
}
