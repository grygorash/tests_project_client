import { PASSWORD } from 'utils/constants';

export const initialResetPasswordData = {
  [PASSWORD]: '',
};

export const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const forgotPasswordRules = {
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
    name: PASSWORD,
    rules: forgotPasswordRules[PASSWORD],
    label: 'Новий пароль',
    placeholder: 'Введіть новий пароль',
	  isPassword: true,
  },
];
