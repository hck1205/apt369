import { useEffect } from 'react';
import { useFetchAPTDataMutation } from '@/API';
import { setApartmentData } from '@/store/modules/apartment';
import { TabComp } from '@/components';
import { PAGE_KEYS } from '@/constpack';

import { PageWrapper } from './styles';
import { TabPaneProps } from 'antd';

const { TODAYS_TRANSACTION } = PAGE_KEYS;

export type Item = Omit<TabPaneProps, 'tab'> & {
  key: string;
  label: React.ReactNode;
};

function TodaysTransaction() {
  const [fetchAPTData, { isLoading }] = useFetchAPTDataMutation();

  useEffect(() => {
    fetchAPTData({})
      .then((response) => {
        if ('data' in response) {
          setApartmentData(response.data.newTransactionLogs);
        }
      })
      .catch(console.error);
  }, [fetchAPTData]);

  useEffect(() => {}, []);

  return (
    <PageWrapper>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <TabComp items={[]} />
        </div>
      )}
    </PageWrapper>
  );
}

export default TodaysTransaction;
