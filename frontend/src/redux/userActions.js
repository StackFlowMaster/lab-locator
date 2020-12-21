const API = "http://localhost:3000"

export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})

export const handleLoginFormChange = (e) => ({
    type: "LOGIN_FORM_CHANGE",
    payload: {name: e.target.name, value: e.target.value}
})

export const sendSignup = (userData) => {
    return dispatch => {
        fetch(API + "/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(response => dispatch({
            type: "SET_USER",
            payload: {user: response.user}
        }))
    }
}

export const sendLogin = (userData) => {
    return dispatch => {
        fetch(API + "/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(response => {
            localStorage.token = response.token
            dispatch({
            type: "SET_USER",
            payload: {user: response.user}
          })
        })
    }
}

export const autoLogin = () => {
  return dispatch => {
    // localhost:3000/users
    fetch(API + "/autologin", {
      method: 'POST', // or 'PUT'
      headers: {
        'Authorization': localStorage.token,
      },
    })
    .then(response => response.json())
    .then(response => {
      dispatch({
      type: "SET_USER",
      payload: {user: response.user}
    })
  })
  }
}