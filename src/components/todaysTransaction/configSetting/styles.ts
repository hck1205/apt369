import styled from "@emotion/styled";

export const ComponentWrapper = styled.div`
  padding: 15px;
`;

export const SettingWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const TitleSectionWrapper = styled.div``;

export const FilterSectionWrapper = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
`;

export const TradeToggleWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  .desc {
    display: flex;
    align-items: center;

    h1 {
      color: #acacac;
      font-size: 12px;
      padding: 0 10px;
      margin-top: 2px;
    }
  }
`;

export const ConfigTitle = styled.div`
  margin: 10px 0;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-btn {
    &.cancel-btn {
      margin-right: 10px;
    }
  }
`;
