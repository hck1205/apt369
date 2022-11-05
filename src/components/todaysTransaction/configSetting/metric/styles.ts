import styled from "@emotion/styled";

export const ComponentWrapper = styled.div`
  flex: 1;
`;

export const MetricSelectWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .number {
    width: 32px;
    height: 32px;
    border-radius: 2px;
    color: #404040;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
    border: 1px solid #d9d9d9;
  }

  .ant-select {
    width: 100%;
  }
`;
