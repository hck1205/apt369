import type { AppProps } from "next/app";

import { wrapper } from "@/store";

import "antd/dist/antd.css";
import "../public/normalize.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
