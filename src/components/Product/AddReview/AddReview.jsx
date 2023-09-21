import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import AddImageField from '@components/Product/AddReview/AddImageField/AddImageField';
import { Rating } from 'react-simple-star-rating';

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
  };

  return (
    <div className="add-review">
      <div className="container add-review__container">
        <h2 className="add-review__title">Your review</h2>
        <Formik
          initialValues={{ message: '' }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm({ values: '' });
          }}
        >
          {() => (
            <Form className="add-review__form">
              <div className="add-review__range">
                <Rating
                  onClick={handleRating}
                  ratingValue={rating}
                  size={50}
                  label
                  transition
                  fillColor="orange"
                  emptyColor="gray"
                  className="stars-rating"
                />
              </div>
              <div className="add-review__form-wrapper">
                <Field className="add-review__message" as="textarea" placeholder="Your message" name="message" />
                <AddImageField />
              </div>
              <button className="add-review__submit-btn" type="submit">
                Add review
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddReview;
