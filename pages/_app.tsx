import type { AppProps } from "next/app";

import "antd/dist/antd.css";
import "./normalize.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
