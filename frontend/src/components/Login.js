import { connect } from 'react-redux'
import { toggleSignup } from '../redux/userActions'

const Login = (props) => {
    const { signup, toggleSignup } = props
    return(
        <>
            <h3>{ signup ? "Sign Up" : "Login" }</h3>
            <form>
                <label>
                        Username:
                    <br/>
                    <input type="text" name="username" />
                    <br/>
                </label><br/>
                <label>
                        Password:
                    <br/>
                    <input type="password" name="password" />
                    <br/>
                </label><br/>
                { signup &&
                    <>
                        <label>
                            Password Confirmation:
                        <br/>
                        <input type="password" name="passwordConfirmation" />
                        <br/><br/>
                    </label>
                    <input className="signin" type="submit" value="Create Account"/>
                    </>
                }
            </form>
            <br/>
            <h4>
                { signup ? "Existing User?" : "First Time Visiting?"}
            </h4>
    <button className="signin" onClick={toggleSignup}>{signup ? "Login" : "Sign Up"}</button>
        </>
    )
}

const mapStateToProps = (state) => ({ signup: state.user.signup })

export default connect(mapStateToProps, { toggleSignup })(Login)