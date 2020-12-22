const API = "http://localhost:3000"

export const reviewFormChange = (e) => ({
  type: "REVIEW_FORM_CHANGE",
  payload: {name: e.target.name, value: e.target.value}
})

export const submitReview = (reviewData) => {
  return dispatch => {
    fetch(API + "/reviews", {
      method: 'POST',
      headers: {
        'Authorization': localStorage.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData)
    })
    .then(res=> res.json())
    .then(review => dispatch({
      type: "SET_REVIEW",
      payload: review
    }))
  }
}