export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Author = {
  __typename?: 'Author';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Array<Maybe<Post>>>;
};

export type CreatePostResponse = {
  __typename?: 'CreatePostResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  post?: Maybe<Post>;
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: CreatePostResponse;
  deletePost: Scalars['Boolean']['output'];
};


export type MutationCreatePostArgs = {
  input?: InputMaybe<PostInput>;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<Author>;
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  published: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type PostInput = {
  authorId: Scalars['ID']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  published: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** Get a post by id */
  post: Post;
  /** Get all posts */
  posts: Array<Post>;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};

export type GetAllPostsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQueryQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, title: string, content?: string | null, author?: { __typename?: 'Author', id: string, email: string, name?: string | null } | null }> };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: boolean };

export type CreatePostMutationVariables = Exact<{
  input?: InputMaybe<PostInput>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'CreatePostResponse', code: number, success: boolean, message: string, post?: { __typename?: 'Post', id: string, title: string, content?: string | null, published: boolean, author?: { __typename?: 'Author', name?: string | null } | null } | null } };

export type PostQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, title: string, content?: string | null, published: boolean, author?: { __typename?: 'Author', name?: string | null } | null } };
