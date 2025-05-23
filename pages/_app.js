import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo"; // ← wherever you export your configured ApolloClient

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
