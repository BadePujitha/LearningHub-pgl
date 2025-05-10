import { Link } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import "./Home.css";

const Home = () => {
  const featuredCourses = [
    { id: 1, title: "React Fundamentals", videoId: "w7ejDZ8SWv8" },
    { id: 2, title: "JavaScript Masterclass", videoId: "PkZNo7MFNFg" },
    { id: 3, title: "CSS Animations", videoId: "YszONjKpgg4" },
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to LearnHub</h1>
        <p>Your gateway to knowledge and skill development</p>
        <div className="auth-buttons">
          <Link to="/login" className="btn login-btn">Login</Link>
          <Link to="/register" className="btn signup-btn">Sign Up</Link>
        </div>
      </section>

      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="course-grid">
          {featuredCourses.map((course) => (
            <VideoCard
              key={course.id}
              title={course.title}
              videoId={course.videoId}
            />
          ))}
        </div>
      </section>

      <section className="instructor-cta">
        <h2>Are you an instructor?</h2>
        <p>Join our platform and share your knowledge with thousands of students</p>
        <Link to="/instructor" className="btn instructor-btn">Access Instructor Panel</Link>
      </section>
    </div>
  );
};

export default Home;