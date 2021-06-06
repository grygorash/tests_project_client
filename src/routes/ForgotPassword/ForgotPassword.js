import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { map, reduce } from 'lodash';
import { Button, Form } from 'antd';

import FormInput from 'components/FormInput/FormInput';
import { initialForgotPasswordData, layout, formInputs } from 'routes/ForgotPassword/constants';
import { LOGIN_PATH } from 'routes/routePathes';
import { forgotPasswordAction } from 'store/actions/authActions';
import { ForgotPasswordStyled } from 'routes/ForgotPassword/styled';

const { useForm } = Form;

const ForgotPassword = () => {
  const history = useHistory();
  const [forgotPasswordErrors, setForgotPasswordErrors] = useState();
  const [isForgotPasswordLoading, setIsForgotPasswordLoading] = useState(false);
  const [forgotPasswordForm] = useForm();

  const handleFinish = async() => {
    try {
      const values = await forgotPasswordForm.validateFields();

      setIsForgotPasswordLoading(true);
      const errors = await forgotPasswordAction(values);

      if (errors) {
        setForgotPasswordErrors(errors);
      } else {
        history.push(LOGIN_PATH);
      }

      setIsForgotPasswordLoading(false);
    } catch ({ errorFields }) {
      setForgotPasswordErrors(reduce(errorFields, (acc, { name, errors }) =>
        name?.[0] ? ({ ...acc, [name[0]]: errors[0] }) : acc, {}));
    }
  };

  return (
    <ForgotPasswordStyled>
      <Form
        {...layout}
        form={forgotPasswordForm}
        initialValues={initialForgotPasswordData}
      >
        <h2>Для відновлення паролю необхідно ввести</h2>
        {map(formInputs, (input) =>
          <FormInput
            key={input.name}
            errors={forgotPasswordErrors}
            setErrors={setForgotPasswordErrors}
            {...input}
          />)}
        <Button
          type="primary"
          htmlType="submit"
          block
          loading={isForgotPasswordLoading}
          onClick={handleFinish}
        >
					Відновити пароль
        </Button>
      </Form>
      <p>
				Вже зареєстровані?
        <Button type="link" onClick={() => history.push(LOGIN_PATH)}>
					&nbsp;Увійти в систему
        </Button>
      </p>
    </ForgotPasswordStyled>
  );
};

export default ForgotPassword;
