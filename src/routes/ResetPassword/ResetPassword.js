import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { map, reduce } from 'lodash';
import { Button, Form } from 'antd';

import FormInput from 'components/FormInput/FormInput';
import { resetPasswordAction } from 'store/actions/authActions';
import { LOGIN_PATH } from 'routes/routePathes';
import { formInputs, initialResetPasswordData, layout } from 'routes/ResetPassword/constants';
import { ResetPasswordStyled } from 'routes/ResetPassword/styled';

const { useForm } = Form;

const ResetPassword = () => {
  const history = useHistory();
  const [resetPasswordErrors, setResetPasswordErrors] = useState();
  const [isResetPasswordLoading, setIsResetPasswordLoading] = useState(false);
  const [resetPasswordForm] = useForm();


  const handleFinish = async() => {
    try {
      const values = await resetPasswordForm.validateFields();

      setIsResetPasswordLoading(true);
      const query = new URLSearchParams(location.search);
      const resetToken = query.get('reset_token');

      const errors = await resetPasswordAction({ ...values, resetToken });

      if (errors) {
        setResetPasswordErrors(errors);
      } else {
        history.push(LOGIN_PATH);
      }

      setIsResetPasswordLoading(false);
    } catch ({ errorFields }) {
      setResetPasswordErrors(reduce(errorFields, (acc, { name, errors }) =>
        name?.[0] ? ({ ...acc, [name[0]]: errors[0] }) : acc, {}));
    }
  };

  return (
    <ResetPasswordStyled>
      <Form
        {...layout}
        form={resetPasswordForm}
        initialValues={initialResetPasswordData}
      >
        <h2>Для відновлення паролю необхідно ввести</h2>
        {map(formInputs, (input) =>
          <FormInput
            key={input.name}
            errors={resetPasswordErrors}
            setErrors={setResetPasswordErrors}
            {...input}
          />)}
        <Button
          type="primary"
          htmlType="submit"
          block
          loading={isResetPasswordLoading}
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
    </ResetPasswordStyled>
  );
};

export default ResetPassword;
