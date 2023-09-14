import { ErrorMessage, Field } from 'formik';

const InputField = ({ className, name, placeholder, error }) => {
  return (
    <>
      <Field className={`${className}__input`} placeholder={placeholder} name={name} />
      <ErrorMessage className={`${className}__error`} component="div" name={name} />
    </>
  );
};

export default InputField;
