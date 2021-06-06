import { Form, Input } from 'antd';

const { Item } = Form;
const { Password } = Input;

const FormInput = ({ name, label, rules, errors, setErrors, placeholder, isPassword }) => {
  const InputComponent = isPassword ? Password : Input;

  return (
    <Item
      name={name}
      label={label}
      rules={rules}
      validateStatus={errors?.[name] && 'error'}
      help={errors?.[name] || null}
    >
      <InputComponent
        allowClear
        placeholder={placeholder}
        onChange={() => setErrors()}
      />
    </Item>
  );
};

export default FormInput;
