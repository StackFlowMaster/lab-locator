import React from 'react';
import { reviewFormChange, submitReview } from '../redux/reviewActions';
import { useSelector, useDispatch } from 'react-redux';

const ReviewForm = () => {

  const form = useSelector(state => state.studios.reviewForm);
  const studio = useSelector(state => state.studios.selectedStudio);
  const studioId = studio.id;
  const rating = form.rating;
  const content = form.content;
  const dispatch = useDispatch();

  const handleFormChange = (data) => {
    dispatch(reviewFormChange(data));
  };

  const handleSubmitReview = (data) => {
    dispatch(submitReview(data));
  };

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmitReview({ ...form, studioId: studioId })
  };

  return (
    <form onSubmit={ onSubmit }>
      <label>
        Rating
        <br/>
        <input type="number" name="rating" value={ rating } onChange={ handleFormChange } />
      </label><br/>
      <br/>
      <label>
        Feedback:
        <br/>
        <textarea name="content" value={ content } onChange={ handleFormChange }></textarea>
      </label><br/>
      <br/>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ReviewForm;