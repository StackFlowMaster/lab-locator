const clearStudio = {
  id: null,
  name: "",
  website: "",
  image_url: "",
  hourly_rate: "",
  location: "",
  reviews: []
}

const clearReviewForm = {
  content: "",
  rating: 0
}

const initialState = {
    studios: {
      studios: [],
      sorted: [],
      paginated_studios: [],
      paginated_sorted: [],
      page: 1,
      page_count: 1
    },
    selectedStudio: clearStudio,
    reviewForm: clearReviewForm,
    filtersForm: {
      search: "",
      sorted: false
    } 
}
  
  const studiosReducer = (state=initialState, action) => {
    switch (action.type){
      case "SET_STUDIOS":
        return {...state, studios: action.payload}
      case "SET_SELECTED_STUDIO":
        return {...state, selectedStudio: action.payload}
      case "RESET_STUDIO":
        return {...state, selectedStudio: clearStudio}
      case "REVIEW_FORM_CHANGE":
        return {...state, reviewForm: {
          ...state.reviewForm,
          [action.payload.name]: action.payload.value
      }}
      case "SET_REVIEW":
        return {
          ...state,
          selectedStudio: {
            ...state.selectedStudio,
            reviews: [...state.selectedStudio.reviews, action.payload]
          },
        reviewForm: clearReviewForm
      }
      case "FILTERS_FORM_CHANGE":
        return {...state,
          filtersForm: {
            ...state.filtersForm,
            [action.payload.name]: action.payload.value
          }
        }
      default:
        return {...state}
      }
  }
  
  export default studiosReducer
  