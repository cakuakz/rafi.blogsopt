import type { APIRoute } from 'astro';
import { eq } from 'astro:db';
import { PostLikes } from 'astro:db';
import { db } from 'astro:db';

// Still under construction, will be developed later

export const POST: APIRoute = async ({ request }) => {
  const { slug } = await request.json();

  let likesRecord = await db.select().from(PostLikes).where(eq(PostLikes.slug, slug));

  if (likesRecord.length === 0) {
    await db.insert(PostLikes).values({ slug, likes: 1 });
    return new Response(JSON.stringify({ likes: 1 }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const currentLikes = likesRecord[0].likes;
  const newLikes = currentLikes + 1;

  await db.update(PostLikes).set({ likes: newLikes }).where(eq(PostLikes.slug, slug));

  return new Response(JSON.stringify({ likes: newLikes }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
