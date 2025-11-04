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
      <section className="pop-feat-course">
        <div className="popular">
          <div className="search-bar">
            <input type="text" placeholder="Search courses..." />
            <button>Search</button>
           </div>   

          {/* Added: Popular Courses block (header adjusted, meta row added) */}
          <div className="popular-courses">
            <div className="popular-courses-header">
              <h2>Popular Courses</h2>
              <button className="view-all-btn">View All Courses</button>
            </div>

            <div className="course-card-grid">
              <div className="course-card">
                <img src="/src/images/web-development-course.png" alt="Web Development" />
                <div className="course-card-body">
                  <h4>Web Development Fundamentals</h4>
                  <p className="instructor">Abebe Tekle</p>
                  <div className="meta-row">
                    <p className="price">4500 ETB</p>
                    <p className="rating">4.8</p>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <img src="/src/images/digital-marketing-course.png" alt="Digital Marketing" />
                <div className="course-card-body">
                  <h4>Digital Marketing Essentials</h4>
                  <p className="instructor">Ayana Gemechu</p>
                  <div className="meta-row">
                    <p className="price">3200 ETB</p>
                    <p className="rating">4.7</p>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <img src="/src/images/ui-ux-design-course.png" alt="UI/UX Design" />
                <div className="course-card-body">
                  <h4>UI/UX Design Masterclass</h4>
                  <p className="instructor">Tadesse Abebe</p>
                  <div className="meta-row">
                    <p className="price">5500 ETB</p>
                    <p className="rating">4.9</p>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <img src="/src/images/business-leadership-course.png" alt="Business Leadership" />
                <div className="course-card-body">
                  <h4>Business Leadership</h4>
                  <p className="instructor">Meaza Tekle</p>
                  <div className="meta-row">
                    <p className="price">3800 ETB</p>
                    <p className="rating">4.6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-course">
          <h2>Popular Catagories</h2>
          <div className="course-list">
            <div className="course-item">
               <div className="course-icon">
                  <i className="fas fa-code"></i> 
                  <p>2.5k courses</p>
               </div>
              <h3>Programming</h3>
            </div>

            <div className="course-item">
               <div className="course-icon">
                  <i className="fas fa-briefcase"></i> 
                  <p>900 courses</p>
               </div>
              <h3>Business</h3>
            </div>


            <div className="course-item">
               <div className="course-icon">
                  <i className="fas fa-palette"></i>    
                  <p>1.8k courses</p>
               </div>
              <h3>Design</h3> 
            </div>
            <div className="course-item">
               <div className="course-icon"> 
                  <i className="fas fa-users"></i> 
                  <p>1.2k courses</p>
               </div>
              <h3>Communication</h3>
            </div>
          </div>
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
