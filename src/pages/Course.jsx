import React from "react";
import CourseCard from "../components/card/CourseCard";
import Sidebar from "../components/sidebar/Sidebar";
import "../styles/course.css";

const CoursePage = () => {
  return (
   <>
      <div className="top">
         <h2>Browse Course</h2>
          <input
          id="search-input"
          type="text"
          placeholder="Search courses"
          aria-label="Search query"
        />
        <select name="" id="">
            <option value="">Most Popular</option>  
            <option value="">New Releases</option>
            <option value="">Highest Rated</option>
            <option value="">Price: Low to High</option>
            <option value="">Price: High to Low</option>       
        </select>
         
      </div>
      <div className="course-page">

         <aside className="course-sidebar" aria-label="Course filters">
         <Sidebar />   
         </aside>

         <main className="course-main">
         <CourseCard />
         </main>
      </div>
   </>
  );
};

export default CoursePage;
