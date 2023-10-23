import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import InputField from '@components/Modals/Auth/InputField';
import Icon from '@components/Base/Icon/Icon';

const ResetPasswordForm = ({ setResetPassword }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Required')
      .matches(/@[^.]*\./, 'Not valid!'),
  });
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: '' });
      }}
    >
      {({ errors }) => (
        <Form className="auth__form">
          <div className="auth__container_left">
            <div className="auth__input-wrapper">
              <InputField
                className="auth"
                type="email"
                name="email"
                placeholder="Email"
                errors={errors}
              />
            </div>
          </div>
          <button className="auth__submit-btn" type="submit">
            Reset
          </button>
          <button
            className="auth__registration-btn"
            type="button"
            onClick={() => setResetPassword(false)}
          >
            <span className="auth__registration-btn-text">
              I remember password
            </span>
            <Icon className="auth__btn-image" name="arrow-accent" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
