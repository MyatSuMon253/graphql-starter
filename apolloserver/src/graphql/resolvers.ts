import { Resolvers } from "../types.ts";
import { getPosts, getPost } from "../services/postServices.js";

export const resolvers = {
  Query: {
    posts: () => {
      return getPosts();
    },
    post: async (parent: any, args: any, contextValue: any, info: any) => {
      const token = contextValue.token;
      return getPost(args.id);
    },
  },
};
