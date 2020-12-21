const clearStudio = {
  id: null,
  name: "",
  website: "",
  image_url: "",
  hourly_rate: "",
  location: ""
}

const initialState = {
    studios: [],
    selectedStudio: clearStudio
}
  
  const studiosReducer = (state=initialState, action) => {
    switch (action.type){
      case "SET_STUDIOS":
        return {...state, studios: action.payload}
      case "SET_SELECTED_STUDIO":
        return {...state, selectedStudio: action.payload}
      case "RESET_STUDIO":
        return {...state, selectedStudio: clearStudio}
      default:
        return {...state}
    }
  }
  
  export default studiosReducer
  