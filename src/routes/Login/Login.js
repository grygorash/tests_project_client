import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { reduce, map } from 'lodash';
import { Button, Checkbox, Form } from 'antd';

import { loginUserAction } from 'store/actions/authActions';
import { formInputs, initialLoginData, layout } from 'routes/Login/constants';
import { FORGOT_PASSWORD_PATH, REGISTER_PATH } from 'routes/routePathes';
import { REMEMBER } from 'utils/constants';
import { LoginStyled, RememberItemStyled } from 'routes/Login/styled';
import FormInput from 'components/FormInput/FormInput';

const { useForm, Item } = Form;

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loginErrors, setLoginErrors] = useState();
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginForm] = useForm();

  const handleFinish = async() => {
    try {
      const values = await loginForm.validateFields();

      setIsLoginLoading(true);
      const errors = await dispatch(loginUserAction(values));

      if (errors) {
        setLoginErrors(errors);
      }

      setIsLoginLoading(false);
    } catch ({ errorFields }) {
      setLoginErrors(reduce(errorFields, (acc, { name, errors }) =>
        name?.[0] ? ({ ...acc, [name[0]]: errors[0] }) : acc, {}));
    }
  };

  return (
    <LoginStyled>
      <Form
        {...layout}
        form={loginForm}
        initialValues={initialLoginData}
      >
        <h2>Для входу в систему необхідно ввести</h2>
        {map(formInputs, (input) =>
          <FormInput
            key={input.name}
            errors={loginErrors}
            setErrors={setLoginErrors}
            {...input}
          />)}
        <RememberItemStyled label="Запам'ятати">
          <Item name={REMEMBER} valuePropName="checked" noStyle>
            <Checkbox />
          </Item>
          <Button
            type="link"
            onClick={() => history.push(FORGOT_PASSWORD_PATH)}
          >
						Відновити пароль
          </Button>
        </RememberItemStyled>
        <Button
          type="primary"
          htmlType="submit"
          block
          loading={isLoginLoading}
          onClick={handleFinish}
        >
					Увійти
        </Button>
      </Form>
      <p>
				Ще не зареєстровані?
        <Button
          type="link"
          onClick={() => history.push(REGISTER_PATH)}
        >
					&nbsp;Зареєструватись
        </Button>
      </p>
    </LoginStyled>
  );
};

export default Login;
