import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const Books = [
  {
    id: 1,
    title: "The Awakening",
    author: "Kate Chopin",
    price: 9.99,
    year: 1899,
  },
  {
    id: 2,
    title: "City of Glass",
    author: "Paul Auster",
    price: 12.99,
    year: 1985,
  },
  { id: 3, title: "1984", author: "George Orwell", price: 14.99, year: 1949 },
];

const typeDefs = `#graphql
type Book {
  id: ID!
  title: String!
  author: String!
  price: Float
}

type Query {
  books: [Book]
}
`;

const resolvers = {
  Query: {
    books: () => Books,
  },
};

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server);
  console.log("server is running at: ", url);
}

startApolloServer()