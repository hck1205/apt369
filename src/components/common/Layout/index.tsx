import { ReactNode } from "react";
import { Menu } from "@/components";

import styled from "@emotion/styled";

export default function LayoutComponent({
  children,
}: {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <LayoutWrapper>
      <Menu />
      <main>{children}</main>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
