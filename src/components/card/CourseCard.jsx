import React from "react";
import "./courseCard.css";
import courses from "../../data/course/course";

/**
 * CardItem - renders a single course card (used internally)
 */
const CardItem = ({ course }) => {
  const {
    id,
    title,
    instructor,
    image,
    level,
    rating,
    students,
    price,
    shortDesc,
    slug,
  } = course;

  return (
    <article
      className="course-card"
      role="article"
      aria-labelledby={`course-${id}-title`}
      tabIndex={0}
    >
      <img src={image} alt={title} />

      <div className="course-card-body">
        <div className="title-row">
          <h4 id={`course-${id}-title`}>{title}</h4>
          {level && (
            <span className="course-badge" aria-hidden="true">
              {level}
            </span>
          )}
        </div>

        {instructor && (
          <p className="instructor instructor--mt">{instructor}</p>
        )}

        {/*
          Rating moved to upper area so price/button stay at bottom.
          rating + students displayed in .rating-row
        */}
        <div className="rating-row" aria-hidden={!rating}>
          <span className="rating-number">
            <strong>{rating}</strong>
            <span className="rating-star">★</span>
          </span>
          {students ? (
            <span className="rating-students muted">
              ({students.toLocaleString()} students)
            </span>
          ) : null}
        </div>

        {shortDesc && <p className="short-desc">{shortDesc}</p>}

        <div className="meta-row">
          <div className="meta-right">
            <p className="price">{price} ETB</p>
            <a
              className="view-course-btn"
              href={slug ? `/courses/${slug}` : "#"}
            >
              View Course
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

/**
 * CourseCard
 * - If `course` prop is provided -> renders single card (CardItem)
 * - If no `course` prop -> renders header + grid of all courses (imports data internally)
 */
const CourseCard = ({ course }) => {
  if (course) {
    return <CardItem course={course} />;
  }

  return (
    <>
      <header className="course-header">
        <h3>
          Showing {courses.length} of {courses.length} courses
        </h3>
      </header>

      <section className="courses-grid">
        {courses.map((c) => (
          <CardItem key={c.id} course={c} />
        ))}
      </section>
    </>
  );
};

export default CourseCard;
