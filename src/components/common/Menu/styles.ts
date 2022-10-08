import styled from "@emotion/styled";

import { GRAY } from "@/styles";

export const ComponentWrapper = styled.div`
  border-bottom: 1px solid ${GRAY(50)};
  height: 55px;

  .menu-wrapper {
    max-width: 1200px;
    height: 55px;
    margin: auto;
    display: flex;
    align-items: center;

    .logo {
      font-size: 20px;
    }
  }
`;