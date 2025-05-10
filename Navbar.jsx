import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LearnHub</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
        <Link to="/myform">MyForm</Link>
        <Link to="/instructor" className="instructor-link">Instructor</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;