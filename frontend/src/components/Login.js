import React from 'react';
import { toggleSignup, handleLoginFormChange, sendSignup, sendLogin } from '../redux/userActions';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {

	const signup = useSelector(state => state.user.signup);
	const form = useSelector(state => state.user.loginForm);
  const username = form.username;
	const password = form.password;
	const passwordConfirmation = form.passwordConfirmation;
	const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSignup());
  };

	const handleFormChange = (e) => {
    dispatch(handleLoginFormChange(e));
  };
	
	const sendSignUp = (data) => {
    dispatch(sendSignup(data));
  };
	
	const login = (data) => {
    dispatch(sendLogin(data));
  };
  
	const onSubmit = (e) => {
    e.preventDefault();
    if (signup){
      if (password === passwordConfirmation){
        sendSignUp({ username: username, password: password })
      } else {
        alert("Password doesn't match confirmation")
      };
    } else {
      login({username: username, password: password});
    };
  };

	return (
		<>
			<h3>{ signup ? "Sign Up" : "Login" }</h3>
			<form onSubmit={ onSubmit }>
				<label>
					Username:
					<br/>
					<input type="text" name="username" value={ username } onChange={ handleFormChange }/>
					<br/>
				</label><br/>
				<label>
					Password:
					<br/>
					<input type="password" name="password" value={ password } onChange={ handleFormChange }/>
					<br/>
				</label><br/>
				{ signup &&
					<>
						<label>
							Password Confirmation:
							<br/>
							<input type="password" name="passwordConfirmation" value={ passwordConfirmation } onChange={ handleFormChange }/>
							<br/>
							<br/>
						</label>
					</>
				}
				<br/>
				<button className="signin" type="submit">{ signup ? "Create Account" : "Login" }</button>
			</form>
			<br/>
			<h4>
				{ signup ? "Existing User?" : "First Time Visiting?" }
			</h4>
			<button className="signin" onClick={ toggle }>{ signup ? "Login" : "Sign Up" }</button>
		</>
	);
}

export default Login;