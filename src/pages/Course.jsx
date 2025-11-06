import React, { useMemo, useState } from "react";
import "../styles/course.css";
import courses from "../data/course/course";
import CourseCard from "../components/card/CourseCard";
import Sidebar from "../components/sidebar/Sidebar";

const defaultFilters = {
  category: "All Categories",
  level: "All Levels",
  price: "All Prices",
  rating: "All Ratings",
  searchQuery: "",
  sort: "Most Popular",
};

const CoursePage = () => {
  const [filters, setFilters] = useState(defaultFilters);

  // called by Sidebar when filter values change
  const handleSidebarChange = (partial) => {
    setFilters((prev) => ({ ...prev, ...partial }));
  };

  // clear from either sidebar or "no results" UI
  const handleClearAll = () => {
    setFilters(defaultFilters);
  };

  // top search input and sort select handlers
  const handleSearchChange = (e) =>
    setFilters((prev) => ({ ...prev, searchQuery: e.target.value }));
  const handleSortChange = (e) =>
    setFilters((prev) => ({ ...prev, sort: e.target.value }));

  // filtering logic
  const filteredCourses = useMemo(() => {
    const q = (filters.searchQuery || "").trim().toLowerCase();

    const list = (courses || []).filter((c) => {
      // search
      if (q) {
        const hay = `${c.title || ""} ${c.instructor || ""} ${
          c.shortDesc || ""
        }`.toLowerCase();
        if (!hay.includes(q)) return false;
      }

      // level
      if (filters.level && filters.level !== "All Levels") {
        if (!c.level) return false;
        if (
          String(c.level).toLowerCase() !== String(filters.level).toLowerCase()
        )
          return false;
      }

      // price
      if (filters.price && filters.price !== "All Prices") {
        if (filters.price === "Free") {
          if (Number(c.price) > 0) return false;
        } else if (filters.price === "Paid") {
          if (!c.price || Number(c.price) <= 0) return false;
        }
      }

      // rating (e.g. "3★ and up")
      if (filters.rating && filters.rating !== "All Ratings") {
        const m = filters.rating.match(/([\d.]+)/);
        if (m) {
          const min = parseFloat(m[1]);
          if (!c.rating || Number(c.rating) < min) return false;
        }
      }

      // category: only filter if course has category field
      if (filters.category && filters.category !== "All Categories") {
        if (c.category) {
          if (
            String(c.category).toLowerCase() !==
            String(filters.category).toLowerCase()
          )
            return false;
        }
        // if course has no category we keep it (so missing data doesn't hide courses)
      }

      return true;
    });

    // sorting
    const sorted = [...list];
    switch ((filters.sort || "").toLowerCase()) {
      case "most popular":
        sorted.sort((a, b) => (b.students || 0) - (a.students || 0));
        break;
      case "highest rated":
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "price: low to high":
        sorted.sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
        break;
      case "price: high to low":
        sorted.sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
        break;
      default:
        break;
    }

    return sorted;
  }, [filters]);

  return (
    <div className="course-page">
      <aside className="course-sidebar">
        <Sidebar
          filters={filters}
          onChange={handleSidebarChange}
          onClear={handleClearAll}
        />
      </aside>

      <main className="course-main">
        <div className="top">
          <h2>Browse Courses</h2>

          <input
            id="search-input"
            type="text"
            placeholder="Search courses..."
            aria-label="Search query"
            value={filters.searchQuery}
            onChange={handleSearchChange}
          />

          <select
            value={filters.sort}
            onChange={handleSortChange}
            aria-label="Sort courses"
            className="top-select"
          >
            <option>Most Popular</option>
            <option>New Releases</option>
            <option>Highest Rated</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <header className="course-header">
          <h3>
            Showing {filteredCourses.length} of {courses.length} courses
          </h3>
        </header>

        {filteredCourses.length === 0 ? (
          <div style={{ padding: 28, textAlign: "center" }}>
            <p style={{ fontSize: 18, marginBottom: 12 }}>
              No course found matching your filters.
            </p>
            <button
              type="button"
              onClick={handleClearAll}
              style={{
                background: "#243c8a",
                color: "#fff",
                padding: "10px 14px",
                borderRadius: 8,
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Reset filters
            </button>
          </div>
        ) : (
          <section className="courses-grid">
            {filteredCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default CoursePage;
