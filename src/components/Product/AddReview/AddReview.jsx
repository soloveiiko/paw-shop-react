import React from 'react';
import { Field, Form, Formik } from 'formik';
import AddImageField from '@components/Product/AddReview/AddImageField/AddImageField';

const AddReview = () => {
  return (
    <div className="add-review">
      <div className="container add-review__container"></div>
      <h2 className="add-review__title">Your review</h2>
      <Formik
        className="add-review__form"
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({ values: '' });
        }}
      >
        {() => (
          <Form>
            <div className="add-review__range"></div>
            <Field className="add-review__text-body" as="textarea" placeholder="Your message"></Field>
            <AddImageField />
            <button className="add-review__submit-btn" type="submit">
              Add review
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddReview;
