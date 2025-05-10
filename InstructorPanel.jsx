import "./InstructorPanel.css";

const InstructorPanel = () => {
  const courses = [
    { id: 1, title: "React Fundamentals", students: 125, status: "Active" },
    { id: 2, title: "Advanced JavaScript", students: 89, status: "Active" },
    { id: 3, title: "CSS Masterclass", students: 42, status: "Draft" }
  ];

  return (
    <div className="instructor-panel">
      <h1>Instructor Dashboard</h1>
      
      <div className="stats-cards">
        <div className="stat-card">
          <h3>Total Courses</h3>
          <p>5</p>
        </div>
        <div className="stat-card">
          <h3>Active Students</h3>
          <p>256</p>
        </div>
        <div className="stat-card">
          <h3>Total Earnings</h3>
          <p>$1,245</p>
        </div>
      </div>
      
      <div className="actions-section">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button className="action-button create-course">
            <span>+</span> Create New Course
          </button>
          <button className="action-button upload-content">
            <span>📤</span> Upload Content
          </button>
          <button className="action-button view-students">
            <span>👥</span> View Students
          </button>
        </div>
      </div>
      
      <div className="courses-section">
        <h2>Your Courses</h2>
        <div className="courses-table">
          <div className="table-header">
            <div className="header-cell">Course Title</div>
            <div className="header-cell">Students</div>
            <div className="header-cell">Status</div>
            <div className="header-cell">Actions</div>
          </div>
          {courses.map(course => (
            <div key={course.id} className="table-row">
              <div className="table-cell">{course.title}</div>
              <div className="table-cell">{course.students}</div>
              <div className="table-cell">
                <span className={`status-badge ${course.status.toLowerCase()}`}>
                  {course.status}
                </span>
              </div>
              <div className="table-cell">
                <button className="edit-btn">Edit</button>
                <button className="stats-btn">Stats</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorPanel;