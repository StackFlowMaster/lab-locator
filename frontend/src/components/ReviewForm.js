import React from 'react'
import { connect } from 'react-redux'
import { reviewFormChange, submitReview } from '../redux/reviewActions'

const ReviewForm = (props) => {

  const { content, rating } = props.form

  const onSubmit = (e) => {
    e.preventDefault()
    props.submitReview({ ...props.form, studio_id: props.studio_id })
  }

  return(
    <form onSubmit={ onSubmit }>
      <label>
        Rating
        <br/>
        <input type="number" name="rating" value={rating} onChange={props.reviewFormChange} />
      </label><br/>
      <br/>
      <label>
        Feedback:
        <br/>
        <textarea name="content" value={content} onChange={props.reviewFormChange}></textarea>
      </label><br/>
      <br/>
      <input type="submit" value="Submit" />
    </form>
  )
}

const mapStateToProps = (state) => ({
  form: state.studios.reviewForm
})

export default connect(mapStateToProps, { reviewFormChange, submitReview })(ReviewForm)