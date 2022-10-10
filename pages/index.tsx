import { TodaysTransaction } from "@/components";
import styled from "@emotion/styled";

function MainPage() {
  return (
    <PageWrapper>
      <TodaysTransaction />
    </PageWrapper>
  );
}

const PageWrapper = styled.div``;

export default MainPage;
