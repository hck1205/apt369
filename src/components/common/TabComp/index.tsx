import { useEffect, useState } from "react";
import { Tabs } from "antd";
import { Item } from "@/components";

type Props = {
  items: Item[];
  onAdd: Function;
};

function TabComp({ items, onAdd }: Props) {
  const [activeKey, setActiveKey] = useState(items[0] ? items[0].key : "");

  useEffect(() => {
    setActiveKey(items[0]?.key);
  }, [items]);

  const onChange = (newActiveKey: string) => {
    return;
  };

  const remove = (targetKey: string) => {
    return;
  };

  const onEdit = (targetKey: any, action: "add" | "remove") => {
    action === "add" ? onAdd() : remove(targetKey);
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
