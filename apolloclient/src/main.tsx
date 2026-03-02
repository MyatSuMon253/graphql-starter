import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

import "./index.css";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client/react";
import { BrowserRouter, Route, Routes } from "react-router";
import PostDetail from "./pages/PostDetail.tsx";

const cache = new InMemoryCache();
const link = new HttpLink({ uri: "http://localhost:4000/" });

const client = new ApolloClient({
  cache: cache,
  link: link,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
);
