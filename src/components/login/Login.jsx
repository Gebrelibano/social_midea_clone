import "./login.css"

export default function Login() {
  return (
    <div className="login">
       <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">DanSocial</h3>
            <span className="loginDesc">
            Connect with friends and the world aroud you on DanSocial. </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="password" className="loginInput" />
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">Create a New Account</button>
            </div>
        </div>
       </div>
    </div>
  )
}
