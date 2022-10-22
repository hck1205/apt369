import styled from "@emotion/styled";

export const CompWrapper = styled.div`
  border: 1px solid #f0f0f0;
  border-top: none;
`;

export const TableWrapper = styled.div<{ fixedTopValue: number | undefined }>`
  .table--header {
    height: 50px;
    background-color: #cbcbf9;
  }

  ul > li {
    list-style: none;
    display: flex;
    margin: 15px 0;
    gap: 20px;
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

export const FieldInfo = styled.div``;
