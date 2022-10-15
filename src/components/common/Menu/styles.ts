import styled from "@emotion/styled";

import { GRAY } from "@/styles";

export const ComponentWrapper = styled.div`
  border-bottom: 1px solid ${GRAY(50)};
  height: 55px;
  overflow: auto;

  .menu-wrapper {
    max-width: 1200px;
    height: 55px;
    margin: auto 10vw;
    display: flex;
    align-items: center;
    gap: 30px;

    .logo {
      font-size: 16px;
      color: black;
      white-space: nowrap;
    }
  }

  .ant-btn {
    border: none;
    box-shadow: none;
  }
`;
