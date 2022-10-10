import { Dropdown, Space } from 'antd';
import MenuComp from './menu';

import { ComponentWrapper } from './styles';

function Menu() {
  return (
    <ComponentWrapper>
      <div className="menu-wrapper">
        <div className="logo">아파트369</div>

        <ul>
          <li>
            <Dropdown overlay={<MenuComp />}>menu1</Dropdown>
          </li>
        </ul>
      </div>
    </ComponentWrapper>
  );
}

export default Menu;
