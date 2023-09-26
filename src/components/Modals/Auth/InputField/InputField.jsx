import { ErrorMessage, Field, useFormikContext } from 'formik';

const InputField = ({ className, name, placeholder }) => {
  const { errors, touched } = useFormikContext();

  return (
    <>
      <Field className={`${className}__input`} placeholder={placeholder} name={name} />
      {errors[name] && touched[name] && <ErrorMessage className={`${className}__error`} component="div" name={name} />}
    </>
  );
};

export default InputField;
