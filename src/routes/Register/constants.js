import { BY_FATHER, EMAIL, FIRST_NAME, LAST_NAME, PASSWORD, PERMISSION } from 'utils/constants';

export const initialRegisterData = {
  [PERMISSION]: 2,
  [EMAIL]: '',
  [FIRST_NAME]: '',
  [LAST_NAME]: '',
  [BY_FATHER]: '',
  [PASSWORD]: '',
};

export const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const stringField = [
  {
    type: 'string',
    min: 3,
    message: 'Ім\'я повинно бути не меньше 3 символів',
  },
  {
    required: true,
    message: 'Обов\'язкове поле',
  },
];

const registerRules = {
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
  [FIRST_NAME]: stringField,
  [LAST_NAME]: stringField,
  [BY_FATHER]: stringField,
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
    rules: registerRules[EMAIL],
    label: 'Електронна пошта',
    placeholder: 'Введіть електронну пошту',
  },
  {
    name: LAST_NAME,
    rules: registerRules[LAST_NAME],
    label: 'Фамілія',
    placeholder: 'Введіть фамілію',
  },
  {
    name: FIRST_NAME,
    rules: registerRules[FIRST_NAME],
    label: 'Ім\'я',
    placeholder: 'Введіть ім\'я',
  },
  {
    name: BY_FATHER,
    rules: registerRules[BY_FATHER],
    label: 'Побатькові',
    placeholder: 'Введіть побатькові',
  },
  {
    name: PASSWORD,
    rules: registerRules[PASSWORD],
    label: 'Пароль',
    placeholder: 'Введіть пароль',
    isPassword: true,
  },

];
