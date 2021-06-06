import styled from 'styled-components';
import { Form } from 'antd';

const { Item } = Form;

export const LoginStyled = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p, h2 {
    text-align: center;
  }

  h2 {
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }

  p {
    margin: 15px 0 0;

    button {
      padding: 0;
    }
  }

  .ant-form {
    min-width: 500px;
    max-width: 500px;
    padding: 24px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;

export const RememberItemStyled = styled(Item)`
  .ant-form-item-control-input-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
