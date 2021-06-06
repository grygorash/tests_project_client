import { EMAIL, PASSWORD, REMEMBER } from 'utils/constants';

export const initialLoginData = {
  [EMAIL]: '',
  [PASSWORD]: '',
  [REMEMBER]: false,
};

export const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const loginRules = {
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
  [PASSWORD]: [
    {
      type: 'string',
      min: 6,
      message: 'Пароль повинен бути не меньше 6 символів',
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
    rules: loginRules[EMAIL],
    label: 'Електронна пошта',
    placeholder: 'Введіть електронну пошту',
  },
  {
    name: PASSWORD,
    rules: loginRules[PASSWORD],
    label: 'Пароль',
    placeholder: 'Введіть пароль',
    isPassword: true,
  },
];
