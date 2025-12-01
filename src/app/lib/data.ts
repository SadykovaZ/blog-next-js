import { createClient, sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function connectToDB() {
  const client = createClient();
  await client.connect();

  try {
    if (client) {
      console.log("Connected");
      return client;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getPosts() {
  try {
    noStore();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await sql`SELECT * FROM posts;`;
    console.log(data.rows);

    return data.rows;
  } catch (error) {}
}
