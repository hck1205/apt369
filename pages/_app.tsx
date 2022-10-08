import type { AppProps } from "next/app";

import { LayoutComponent } from "@/components";
import { wrapper } from "@/store";

import "antd/dist/antd.css";
import "../public/normalize.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default wrapper.withRedux(App);
