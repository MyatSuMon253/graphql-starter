import { PostInput, Resolvers } from "../types.ts";
import { getPosts, getPost, createPost } from "../services/postServices.js";

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
  Mutation: {
    createPost: async (__: any, { input }: { input: PostInput }) => {
      // must validate the input
      try {
        if (!input) {
          throw new Error("Input is required to create a post");
        }
        const response = await createPost(input);
        return {
          code: 200,
          success: true,
          message: "Post created",
          post: response,
        };
      } catch (error: any) {
        return {
          code: 500,
          success: false,
          message: error.extension.respones.body || "Internal Server Error",
          post: null,
        };
      }
      return {};
    },
  },
};
