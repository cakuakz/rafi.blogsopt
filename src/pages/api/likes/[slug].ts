import { incrementLikes } from '@utils/db/likes';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.slug }
  }));
}

export const POST: APIRoute = async ({ params }) => {
  const { slug } = params;
  if (!slug) {
    return new Response(
      JSON.stringify({ error: 'Slug is required' }),
      { status: 400 }
    );
  }

  try {
    const newLikes = await incrementLikes(slug);
    return new Response(
      JSON.stringify({ likes: newLikes }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to update likes' }),
      { status: 500 }
    );
  }
}