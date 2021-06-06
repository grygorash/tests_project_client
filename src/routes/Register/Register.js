import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { map, reduce } from 'lodash';
import { Button, Form, Select } from 'antd';

import FormInput from 'components/FormInput/FormInput';
import { registerUserAction } from 'store/actions/authActions';
import { formInputs, initialRegisterData, layout } from 'routes/Register/constants';
import { PERMISSION, permissions } from 'utils/constants';
import { getPermissionByKey } from 'utils/getData';
import { LOGIN_PATH } from 'routes/routePathes';
import { RegisterStyled } from 'routes/Register/styled';

const { Item, useForm } = Form;
const { Option } = Select;

const Register = () => {
  const history = useHistory();
  const [registerErrors, setRegisterErrors] = useState();
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerForm] = useForm();

  const handleFinish = async() => {
    try {
      const values = await registerForm.validateFields();

      setIsRegisterLoading(true);
      const errors = await registerUserAction(values);

      if (errors) {
        setRegisterErrors(errors);
      } else {
        history.push(LOGIN_PATH);
      }

      setIsRegisterLoading(false);
    } catch ({ errorFields }) {
      setRegisterErrors(reduce(errorFields, (acc, { name, errors }) =>
        name?.[0] ? ({ ...acc, [name[0]]: errors[0] }) : acc, {}));
    }
  };

  return (
    <RegisterStyled>
      <Form
        {...layout}
        form={registerForm}
        initialValues={initialRegisterData}
      >
        <h2>Для реєстрації необхідно ввести</h2>
        <Item
          name={PERMISSION}
          label="Зареєструватись як"
        >
          <Select>
            {map(permissions, (permission) =>
              <Option key={permission} value={permission}>{getPermissionByKey[permission]}</Option>)}
          </Select>
        </Item>
        {map(formInputs, (input) =>
          <FormInput
            key={input.name}
            errors={registerErrors}
            setErrors={setRegisterErrors}
            {...input}
          />)}
        <Button
          type="primary"
          htmlType="submit"
          block
          loading={isRegisterLoading}
          onClick={handleFinish}
        >
					Зареєструватись
        </Button>
      </Form>
      <p>
				Вже зареєстровані?
        <Button type="link" onClick={() => history.push(LOGIN_PATH)}>
					&nbsp;Увійти в систему
        </Button>
      </p>
    </RegisterStyled>
  );
};

export default Register;
