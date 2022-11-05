import styled from "@emotion/styled";

export const ComponentWrapper = styled.div``;

export const RegionSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

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
`;
