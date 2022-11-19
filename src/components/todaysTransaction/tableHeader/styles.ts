import styled from "@emotion/styled";

export const CompWrapper = styled.div`
  /* background-color: #f5f9fc; */
`;

export const HeaderWrapper = styled.div`
  padding: 14px;
  background-color: #f5f9fc;
`;

export const TotalAndGearWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .total {
  }

  .option {
    padding: 0 15px;
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  .apt-wrapper {
  }

  .metric-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    margin-left: 100px;
    gap: 60px;
  }
`;
