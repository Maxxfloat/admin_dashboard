import type { AppProps } from "next/app";

import Layout from "../components/Layout/Layout";
import { ContextProvider } from "../contexts/ContextProvider";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
