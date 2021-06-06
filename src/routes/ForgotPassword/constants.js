import { EMAIL } from 'utils/constants';

export const initialForgotPasswordData = {
  [EMAIL]: '',
};

export const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const forgotPasswordRules = {
  [EMAIL]: [
    {
      type: EMAIL,
      message: 'Невірна електронна пошта',
    },
    {
      required: true,
      message: 'Обов\'язкове поле',
    },
  ],
};

export const formInputs = [
  {
    name: EMAIL,
    rules: forgotPasswordRules[EMAIL],
    label: 'Електронна пошта',
    placeholder: 'Введіть електронну пошту',
  },
];
