// Home.jsx
import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Learn. Teach. Earn.</h1>
          <p>
               SkillHub Ethiopia is your premier online learning marketplace.<br />
               Connect with expert instructors, master new skills,<br />
               and grow your career on your own schedule.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Browse Courses</button>
            <button className="btn btn-outline">Become an Instructor</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/src/images/image.png"
            alt="Laptop showing an online course interface..."
          />
        </div>
      </section>
      <section className="features">
          <div className="totalStudent">
               <h2>12.5k+</h2>
               <p>Active Students</p>
          </div>
          <div className="totalCourses">
               <h2>2.5k</h2>
               <p>Courses Available</p>
          </div>
          <div className="totalInstructors">
               <h2>850+</h2>
               <p>Expert Instructors</p>
          </div>
          <div className="rating">
               <h2>4.8</h2>
               <p>Average Course Rating</p>
          </div>
      </section>
      <section className="home">
        <div className="main">
          <h1>Ready to Start Learning?</h1>
          <p>
            Join thousands of Ethiopian learners and start your journey to
            success today.
          </p>
          <div className="main-buttons">
            <button className="btn btn-primary">Join as Student</button>
            <button className="btn btn-outline">Become an Instructor</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
