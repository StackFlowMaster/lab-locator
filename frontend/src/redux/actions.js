const API = "http://localhost:3000"

// export const like = () => ({type: "ADD_LIKE"})

export const setSelectedStudio = (id) => {
  return dispatch => {
    fetch(API + "/studios/" + id)
    .then(res => res.json())
    .then(studio => dispatch({
      type: "SET_SELECTED_STUDIO",
      payload: studio
    })
  )}
}

export const setStudios = () => {
  return dispatch => {
    fetch(API + "/studios")
    .then(res => res.json())
    .then(studios => dispatch({
      type: "SET_STUDIOS",
      payload: studios
    })
  )}
}