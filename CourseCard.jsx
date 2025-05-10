import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.image || "https://via.placeholder.com/300x200"} alt={course.title} />
      </div>
      <div className="course-content">
        <h3>{course.title}</h3>
        <p className="instructor">{course.instructor}</p>
        <p className="description">{course.description}</p>
        <div className="course-meta">
          <span className="rating">⭐ {course.rating || 4.5}</span>
          <span className="students">👥 {course.students || 1000}+</span>
        </div>
        <Link to={`/courses/${course.id}`} className="view-course-btn">
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;