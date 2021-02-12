const API = "http://localhost:3000"

export const setStudios = () => {
  return dispatch => {
    fetch(API + "/studios")
    .then(res => res.json())
    .then(data => dispatch({
      type: "SET_STUDIOS",
      payload: data
    })
  )}
}

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

export const resetStudio = () => ({type: "RESET_STUDIO"})

export const handleFiltersFormChange = (e) => {
  const target = e.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  return ({
    type: "FILTERS_FORM_CHANGE",
    payload: {name: e.target.name, value: value}
  })
}