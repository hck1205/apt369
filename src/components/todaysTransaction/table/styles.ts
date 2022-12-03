import styled from "@emotion/styled";

export const ComponentWrapper = styled.div`
  border: 1px solid #f0f0f0;
  border-top: none;
`;

export const TableWrapper = styled.div`
  ul > li {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
  }

  ul > li:not(.fields-wrapper) {
    padding: 10px 10px;
    height: 80px;
  }
`;

export const ApartmentInfoWrapper = styled.div`
  line-height: 13px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  .apt-name {
    font-size: 1rem;
    font-weight: bold;
    padding-bottom: 2px;
  }

  p {
    font-size: 0.75rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  .fields-wrapper {
    transform: unset;
    display: inline-flex;
    height: 60px;
    border-top: 1px solid #f0f0f0;

    p {
      min-width: 180px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: #f5f9fc;
    }
  }

  .apt-wrapper {
    .fields-wrapper {
      p {
        background-color: #f5f9fc;
        justify-content: flex-start;
        padding-left: 10px;
      }
    }
  }

  .price-info-wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;

    .fields-wrapper {
      p {
        &:last-child {
          padding-right: 10px;
        }
      }
    }

    .row {
      .price-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;

        .price,
        .percentage {
          min-width: 180px;
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .red {
          color: #dc3545;
        }

        .green {
          color: green;
        }

        .percentage {
          color: #6c757d;
        }
      }
    }
  }
`;
