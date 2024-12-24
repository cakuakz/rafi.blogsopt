import { db, eq, PostLikes } from 'astro:db';

export async function getLikesForPost(slug: string) {
  const post = await db
    .select()
    .from(PostLikes)
    .where(eq(PostLikes.slug, slug))
    .get()
  
  return post?.likes || 0
}

export async function incrementLikes(slug: string) {
  const post = await db
    .select()
    .from(PostLikes)
    .where(eq(PostLikes.slug, slug))
    .get();

  if (!post) {
    await db.insert(PostLikes).values({
      slug,
      likes: 1,
      lastUpdated: new Date(),
    }).execute();

    return 1;
  }

  const newLikes = post.likes + 1;

  await db
    .update(PostLikes)
    .set({
      likes: newLikes,
      lastUpdated: new Date(),
    })
    .where(eq(PostLikes.slug, slug))
    .execute();

  return newLikes;
}
