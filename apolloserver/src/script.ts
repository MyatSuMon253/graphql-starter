import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client.ts";
import dotenv from "dotenv";

dotenv.config();
const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaBetterSqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("start seeding...");
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@gmail.com",
      posts: {
        create: [
          {
            title: "Hello World",
            content: "Hello World first post",
            published: true,
          },
          {
            title: "Post Two",
            content: "Hello World second post",
            published: false,
          },
        ],
      },
    },
  });
  console.log("create user with posts");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
