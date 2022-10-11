import type { AppProps } from "next/app";

import { LayoutComponent } from "@/components";
import { wrapper } from "@/store";
import { initLocalStorage } from "@/store/modules/global";
import { useDispatch } from "react-redux";

import "antd/dist/antd.css";
import "../public/normalize.css";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initLocalStorage());
  }, []);

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default wrapper.withRedux(App);
