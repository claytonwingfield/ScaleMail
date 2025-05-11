// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const getStrapiUrl = () => {
  // 1. In the browser, sniff the hostname …
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    // localhost or 127.0.0.1 → local Strapi
    if (host === "localhost" || host === "127.0.0.1") {
      return "http://localhost:1337";
    }
    // 192.168.x.x → assume Strapi is on that same IP:1337
    if (/^192\.168\.\d+\.\d+$/.test(host)) {
      return `http://${host}:1337`;
    }
    // otherwise, use whatever you put in NEXT_PUBLIC_STRAPI_URL
    return process.env.NEXT_PUBLIC_STRAPI_URL;
  }

  // 2. On the server (SSR), fall back to STRAPI_GRAPHQL_API or NEXT_PUBLIC_STRAPI_URL
  return (
    process.env.STRAPI_GRAPHQL_API ||
    process.env.NEXT_PUBLIC_STRAPI_URL ||
    "http://localhost:1337"
  );
};

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${getStrapiUrl()}/graphql`,
    // if you’re doing cookies/auth, you might also need:
    // credentials: 'include',
  }),
  cache: new InMemoryCache(),
});

export default client;
