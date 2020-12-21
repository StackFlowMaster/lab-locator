const initialStudioState = {
    studios: [],
    selectedStudio: {
      id: null,
      name: "",
      website: "",
      image_url: "",
      hourly_rate: "",
      lat: "",
      long: "",
      location: ""
    }
  }
  
  const studiosReducer = (state=initialStudioState, action) => {
    switch (action.type){
      case "SET_SELECTED_STUDIO":
        return {...state, selectedStudio: action.payload}
      case "SET_STUDIOS":
        return {...state, studios: action.payload}
      default:
        return {...state}
    }
  }
  
  export default studiosReducer
  