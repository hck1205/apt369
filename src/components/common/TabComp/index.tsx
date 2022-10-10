import React, { FunctionComponent, useEffect, useState } from 'react';
import { TabPaneProps, Tabs } from 'antd';
import { Item } from '@/components';

type Props = {
  items: Item[];
};

function TabComp({ items }: Props) {
  const [activeKey, setActiveKey] = useState(items[0].key);

  const onChange = (newActiveKey: string) => {
    return;
  };

  const add = () => {
    return;
  };

  const remove = (targetKey: string) => {
    return;
  };

  const onEdit = (targetKey: any, action: 'add' | 'remove') => {
    action === 'add' ? add() : remove(targetKey);
  };

  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
    />
  );
}

export default TabComp;
