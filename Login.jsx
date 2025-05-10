import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to Your Account</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="form-footer">
          <p>Don't have an account? <Link to="/register">Sign up</Link></p>
          <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;