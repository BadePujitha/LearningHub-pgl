import { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCourses([
        {
          id: 1,
          title: "Complete React Developer",
          instructor: "Jane Smith",
          description: "Master React with this comprehensive course covering hooks, context, and more",
          image: "https://via.placeholder.com/300x200",
          rating: 4.7,
          students: 12500
        },
        {
          id: 2,
          title: "Advanced JavaScript Patterns",
          instructor: "John Doe",
          description: "Learn advanced JavaScript concepts and design patterns",
          image: "https://via.placeholder.com/300x200",
          rating: 4.8,
          students: 8500
        },
        {
          id: 3,
          title: "CSS & Sass Masterclass",
          instructor: "Sarah Johnson",
          description: "From basics to advanced CSS techniques with Sass preprocessor",
          image: "https://via.placeholder.com/300x200",
          rating: 4.6,
          students: 9200
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="courses-page">
      <h1>All Courses</h1>
      {loading ? (
        <div className="loading">Loading courses...</div>
      ) : (
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;