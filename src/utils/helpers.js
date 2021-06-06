import { map } from 'lodash';
import { Menu } from 'antd';

const { Item } = Menu;

export const getDropdownMenu = (menu) => (
  <Menu>
    {map(menu, ({ key, text, onClick }) => <Item key={key} onClick={onClick}>{text}</Item>)}
  </Menu>
);
