import styled from "@emotion/styled";

export const ComponentWrapper = styled.div`
  border: 1px solid #f0f0f0;
  border-top: none;
`;

export const TableWrapper = styled.div`
  ul > li {
    display: flex;
    gap: 20px;
    height: 60px;
    width: 100%;
  }
`;

export const ApartmentInfoWrapper = styled.div`
  font-size: 11px;
  line-height: 13px;

  .apt-name {
    font-size: 13px;
    font-weight: bold;
    padding-bottom: 2px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  .fields-wrapper {
    background-color: #f5f9fc;
    transform: "unset";
    display: inline-flex;

    p {
      min-width: 180px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }

  .apt-wrapper {
    .fields-wrapper {
      p {
        justify-content: flex-start;
      }
    }
  }

  .price-info-wrapper {
    overflow-x: scroll;
    width: 100%;

    .row {
      .price-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;

        .price {
          min-width: 180px;
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
      }
    }
  }
`;
