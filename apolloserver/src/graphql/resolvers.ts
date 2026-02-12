import { getPosts } from "../services/postServices.js";

export const resolvers = {
  Query: {
    posts: () => {
      return getPosts();
    },
  },
};
