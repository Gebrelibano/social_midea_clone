import "./register.css"

export default function Register() {
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
                <input type="Email"  placeholder="UserName" className="loginInput" />
                <input type="Email" 
                placeholder="Email"
                className="loginInput" />
                <input type="Email" 
                placeholder="password"
                className="loginInput" />
                <input type="password " 
                placeholder="password Again"
                className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">Log into Acoount </button>
            </div>
        </div>
       </div>
    </div>
  )
}
