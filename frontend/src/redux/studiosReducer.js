const initialStudioState = {
    studios: []
  }
  
  const studiosReducer = (state=initialStudioState, action) => {
    switch (action.type){
      case "SET_STUDIOS":
        return {...state, studios: action.payload}
      default:
        return {...state}
    }
  }
  
  export default studiosReducer
  