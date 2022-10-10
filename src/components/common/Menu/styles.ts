import styled from '@emotion/styled';

import { GRAY } from '@/styles';

export const ComponentWrapper = styled.div`
  border-bottom: 1px solid ${GRAY(50)};
  height: 55px;

  .menu-wrapper {
    max-width: 1200px;
    height: 55px;
    margin: auto 10%;
    display: flex;
    align-items: center;
    gap: 30px;

    .logo {
      font-size: 20px;
      color: black;
    }
  }

  .ant-btn {
    border: none;
    box-shadow: none;
  }
`;
