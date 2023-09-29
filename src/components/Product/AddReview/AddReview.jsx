import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import AddImageField from '@components/Product/AddReview/AddImageField/AddImageField';
import { Rating } from 'react-simple-star-rating';
import { useAddReviewsMutation } from '../../../services/reviewApi';

const AddReview = ({ productId }) => {
  const [newReview, setNewReview] = useState([]);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
  };
  const [addedReview] = useAddReviewsMutation();
  const onSubmitHandler = async (values, { resetForm }) => {
    try {
      const reviewData = {
        body: values.body,
        rating: rating,
        images: [],
        parent_id: '',
      };
      console.error('reviewData:', reviewData);
      const result = await addedReview(productId, reviewData);
      console.error('result:', result);
      if (result.data) {
        setNewReview(addedReview);
        resetForm({ values: { body: '' } });
        return result;
      }
    } catch (error) {
      console.error('Error adding review:', error);

      // Log specific details from the error object
      console.log('Error details:', error.response?.data);

      // Handle the error, show a message to the user, etc.
    }

    return null;
  };
  return (
    <div className="add-review">
      <div className="container add-review__container">
        <h2 className="add-review__title">Your review</h2>
        <Formik initialValues={{ body: '' }} onSubmit={onSubmitHandler}>
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
                <Field
                  className="add-review__message"
                  as="textarea"
                  placeholder="Your message"
                  name="body"
                />
                <AddImageField
                  images={images}
                  setImages={setImages}
                  imageURLs={imageURLs}
                  setImageURLs={setImageURLs}
                />
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
