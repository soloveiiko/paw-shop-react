import { ErrorMessage, Field, useFormikContext } from 'formik';

const InputField = ({ className, name, placeholder, isErrorFromServer, errorFromServer }) => {
  const { errors, touched } = useFormikContext();
  console.log('error', isErrorFromServer, errors[name]);
  return (
    <>
      <Field
        className={`${className}__input ${errors[name] ? 'input-error' : ''}`}
        placeholder={placeholder}
        name={name}
      />
      {isErrorFromServer ? (
        <div className={`${className}__error`}>{errorFromServer}</div>
      ) : (
        errors[name] && touched[name] && <ErrorMessage className={`${className}__error`} component="div" name={name} />
      )}
    </>
  );
};

export default InputField;
