import { Dropdown, Space, Button } from "antd";
import { FirstMenu, SecondMenu, ThirdMenu } from "./menu";

import { ComponentWrapper } from "./styles";

function Menu() {
  return (
    <ComponentWrapper>
      <div className="menu-wrapper">
        <a className="logo" href="/">
          아파트369
        </a>

        <Space wrap>
          <Dropdown overlay={FirstMenu} placement="bottomLeft">
            <Button>아파트 실거래가</Button>
          </Dropdown>
        </Space>

        <Space wrap>
          <Dropdown overlay={SecondMenu} placement="bottomLeft">
            <Button>아파트별</Button>
          </Dropdown>
        </Space>

        <Space wrap>
          <Dropdown overlay={ThirdMenu} placement="bottomLeft">
            <Button>오늘의 실거래가</Button>
          </Dropdown>
        </Space>
      </div>
    </ComponentWrapper>
  );
}

export default Menu;
