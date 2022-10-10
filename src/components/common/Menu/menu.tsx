import { SmileOutlined } from "@ant-design/icons";
import { Menu } from "antd";

export const FirstMenu = (
  <Menu
    items={[
      {
        key: "firstMenu_1",
        label: <a href="/">준비중입니다</a>,
        disabled: true,
      },
    ]}
  />
);

export const SecondMenu = (
  <Menu
    items={[
      {
        key: "secondMenu_1",
        label: <a href="/">준비중입니다</a>,
        disabled: true,
      },
    ]}
  />
);

export const ThirdMenu = (
  <Menu
    items={[
      {
        key: "thirdMenu_1",
        label: <a href="/">오늘의 실거래</a>,
      },
    ]}
  />
);
