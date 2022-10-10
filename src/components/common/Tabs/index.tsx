import { Tabs } from "antd";
import React, { useEffect, useState } from "react";

const initialItems = [
  { label: "Tab 1", children: "Content of Tab 1", key: "1" },
  { label: "Tab 2", children: "Content of Tab 2", key: "2" },
  {
    label: "Tab 3",
    children: "Content of Tab 3",
    key: "3",
    closable: false,
  },
];

type Props = {
  localData: { menuKey: string; data: any[] };
  tabComponent: React.FunctionComponent;
};

function TabComp({ localData, tabComponent: TabComponent }: Props) {
  const [activeKey, setActiveKey] = useState(localData.data[0].key);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const { data = [] } = localData;

    const items = data.map(() => {
      return {
        label: "",
        children: <TabComponent />,
      };
    });
  }, [localData]);

  const onChange = (newActiveKey: string) => {
    return;
  };

  const add = () => {
    return;
  };

  const remove = (targetKey: string) => {
    return;
  };

  const onEdit = (targetKey: any, action: "add" | "remove") => {
    action === "add" ? add() : remove(targetKey);
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
