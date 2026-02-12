import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";
import { fileURLToPath } from "url";

import { resolvers } from "./graphql/resolvers.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "./graphql/schema.graphql"), "utf-8"),
);

interface MyContext {
  token: string;
}

async function startApolloServer() {
  const server = new ApolloServer<MyContext>({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => ({
      token: req.headers.authorization || "",
    }),
  });
  console.log("server is running at: ", url);
}

startApolloServer();
