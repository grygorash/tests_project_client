import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { GlobalSpinnerStyled } from 'components/GlobalSpinner/styled';

const GlobalSpinner = ({ fontSize = 30 }) =>
  <GlobalSpinnerStyled>
    <Spin indicator={<LoadingOutlined style={{ fontSize }} spin />} />
  </GlobalSpinnerStyled>;

export default GlobalSpinner;
