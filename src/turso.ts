import { createClient } from "@libsql/client/web";

export const turso = createClient({
  url: import.meta.env.ASTRO_DB_REMOTE_URL,
  authToken: import.meta.env.ASTRO_DB_APP_TOKEN,
});

const createPostLikesTable = `
  CREATE TABLE IF NOT EXISTS PostLikes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL,
    likes INTEGER DEFAULT 0
  );
`;

(async () => {
  try {
    await turso.execute(createPostLikesTable);
    console.log("Table created successfully.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
})();
