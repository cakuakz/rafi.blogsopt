import { defineDb, defineTable, column } from 'astro:db';

const PostLikes = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    slug: column.text({ unique: true }),
    likes: column.number({ default: 0 }),
    lastUpdated: column.date({ default: new Date() })
  }
})

export default defineDb({
  tables: { PostLikes },
})