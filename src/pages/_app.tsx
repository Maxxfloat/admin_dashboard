import type { AppProps } from "next/app";

import "../styles/global.css";
import Layout from "../components/Layout/Layout";
import { ContextProvider } from "../contexts/ContextProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
