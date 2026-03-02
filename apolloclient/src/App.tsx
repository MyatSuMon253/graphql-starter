import { useQuery } from "@apollo/client/react";
// import { gql } from "./__generated__";
import { gql } from "@apollo/client";
import PostCard from "./components/Post";

export const POSTS = gql(`
query getAllPostsQuery {
  posts {
    id
    title
    content
    author {
      id
      email
      name
    }
  }
}
`);

function App() {
  const { loading, error, data } = useQuery(POSTS);

  if (loading) return <p>loading...</p>;

  if (error) return <p>error: {error.message}</p>;

  return (
    <>
      <h1>List of all posts</h1>
      {data?.posts?.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}

export default App;
