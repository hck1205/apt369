import { SmileOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const MenuComp = () => {
  return (
    <>
      <Menu
        items={[
          {
            key: '1',
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
              >
                1st menu item
              </a>
            ),
          },
        ]}
      />
    </>
  );
};

export default MenuComp;
