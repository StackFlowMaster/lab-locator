import React from 'react'
import { connect } from 'react-redux'
import { toggleSignup, handleLoginFormChange, sendSignup, sendLogin } from '../redux/userActions'

const Login = (props) => {
    const { signup, toggleSignup, form, handleLoginFormChange, sendSignup, sendLogin } = props
    const { username, password, passwordConfirmation } = form
    const onSubmit = (e) => {
        e.preventDefault()
        if (signup){
            if (password === passwordConfirmation){
                sendSignup({ username: username, password: password })
            } else {
                alert("Password doesn't match confirmation")
            }
        } else {
            sendLogin({username: username, password: password})
        }
    }

    return(
        <>
            <h3>{ signup ? "Sign Up" : "Login" }</h3>
            <form onSubmit={ onSubmit }>
                <label>
                        Username:
                    <br/>
                    <input type="text" name="username" value={ username } onChange={ handleLoginFormChange }/>
                    <br/>
                </label><br/>
                <label>
                        Password:
                    <br/>
                    <input type="password" name="password" value={ password } onChange={ handleLoginFormChange }/>
                    <br/>
                </label><br/>
                { signup &&
                    <>
                        <label>
                            Password Confirmation:
                            <br/>
                            <input type="password" name="passwordConfirmation" value={ passwordConfirmation } onChange={ handleLoginFormChange }/>
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
    <button className="signin" onClick={ toggleSignup }>{ signup ? "Login" : "Sign Up" }</button>
        </>
    )
}

const mapStateToProps = (state) => ({
    signup: state.user.signup,
    form: state.user.loginForm
})

export default connect(mapStateToProps, { toggleSignup, handleLoginFormChange, sendSignup, sendLogin })(Login)