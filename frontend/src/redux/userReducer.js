const initialLoginForm = {
  username: "",
  password: "",
  passwordConfirmation: ""
}


const initialState = {
    id: null,
    username: null,
    signup: true,
    loginForm: initialLoginForm
}
  
  const userReducer = (state=initialState, action) => {
    switch (action.type){
        case "TOGGLE_SIGNUP":
            return {...state, signup: !state.signup}
        case "LOGIN_FORM_CHANGE":
          return {...state, loginForm: {
            ...state.loginForm,
            [action.payload.name]: action.payload.value
          }}
        case "SET_USER":
          return { ...state, ...action.payload.user}
      default:
        return {...state}
    }
  }
  
  export default userReducer
  