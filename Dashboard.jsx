import "./Dashboard.css";

const Dashboard = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "React Fundamentals",
      progress: 65,
      lastAccessed: "2 days ago"
    },
    {
      id: 2,
      title: "JavaScript Basics",
      progress: 90,
      lastAccessed: "1 day ago"
    }
  ];

  return (
    <div className="dashboard">
      <h1>Your Learning Dashboard</h1>
      
      <div className="progress-section">
        <h2>Your Progress</h2>
        <div className="progress-cards">
          {enrolledCourses.map(course => (
            <div key={course.id} className="progress-card">
              <h3>{course.title}</h3>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p>{course.progress}% complete</p>
              <p className="last-accessed">Last accessed: {course.lastAccessed}</p>
              <button className="continue-btn">Continue Learning</button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="achievements-section">
        <h2>Your Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <h3>Fast Learner</h3>
            <p>Completed 5 lessons in one day</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">⭐</div>
            <h3>Quiz Master</h3>
            <p>Scored 100% on 3 quizzes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;