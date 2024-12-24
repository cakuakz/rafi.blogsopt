import { getCollection } from 'astro:content';
import { getLikesForPost } from './likes';

export async function getAllPosts() {
    const posts = await getCollection('blog');
    const postsWithLikes = await Promise.all(
      posts.map(async (post) => {
        const likes = await getLikesForPost(post.slug);
        return {
          ...post,
          likes
        };
      })
    );
    
    return postsWithLikes.sort((a, b) => 
      b.data.pubDate.getTime() - a.data.pubDate.getTime()
    );
}