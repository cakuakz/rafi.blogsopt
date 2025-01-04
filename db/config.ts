// https://astro.build/db/config
import { defineDb, defineTable, column } from 'astro:db';

const PostLikes = defineTable({
  deprecated: true,
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    slug: column.text(),
    likes: column.number({ default: 0 })
  }
});

const post_likes = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    post_slug: column.text(),
    count: column.number({ default: 0 })
  }
});


export default defineDb({
  tables: { PostLikes }
});
