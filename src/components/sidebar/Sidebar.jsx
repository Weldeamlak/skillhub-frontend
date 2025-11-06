import React, { useState, useEffect } from "react";
import "./sidebar.css";

const CATEGORIES = [
  "All Categories",
  "Programming",
  "Business",
  "Design",
  "Communication",
  "Data Science",
];

const LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const PRICES = ["All Prices", "Free", "Paid"];
const RATINGS = [
  "All Ratings",
  "3★ and up",
  "3.5★ and up",
  "4★ and up",
  "4.5★ and up",
];

const Sidebar = ({ filters = {}, onChange = () => {}, onClear = () => {} }) => {
  const defaultFilters = {
    category: "All Categories",
    level: "All Levels",
    price: "All Prices",
    rating: "All Ratings",
    ...filters,
  };

  const [category, setCategory] = useState(defaultFilters.category);
  const [level, setLevel] = useState(defaultFilters.level);
  const [price, setPrice] = useState(defaultFilters.price);
  const [rating, setRating] = useState(defaultFilters.rating);

  // keep local state in sync if parent resets filters
  useEffect(() => {
    setCategory(filters.category ?? defaultFilters.category);
    setLevel(filters.level ?? defaultFilters.level);
    setPrice(filters.price ?? defaultFilters.price);
    setRating(filters.rating ?? defaultFilters.rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.category, filters.level, filters.price, filters.rating]);

  // notify parent whenever any filter changes
  useEffect(() => {
    onChange({
      category,
      level,
      price,
      rating,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, level, price, rating]);

  const handleClear = () => {
    setCategory(defaultFilters.category);
    setLevel(defaultFilters.level);
    setPrice(defaultFilters.price);
    setRating(defaultFilters.rating);
    onClear(); // inform parent
    // onChange will fire due to state updates (useEffect)
  };

  return (
    <aside className="sidebar">
      <h3 className="filters-title">Filters</h3>

      <div className="filter-block">
        <h4 className="filter-heading">Category</h4>
        <ul className="options-list">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <button
                type="button"
                className={`filter-option ${category === c ? "is-active" : ""}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-divider" />

      <div className="filter-block">
        <h4 className="filter-heading">Level</h4>
        <ul className="options-list">
          {LEVELS.map((l) => (
            <li key={l}>
              <button
                type="button"
                className={`filter-option ${level === l ? "is-active" : ""}`}
                onClick={() => setLevel(l)}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-divider" />

      <div className="filter-block">
        <h4 className="filter-heading">Price</h4>
        <ul className="options-list">
          {PRICES.map((p) => (
            <li key={p}>
              <button
                type="button"
                className={`filter-option ${price === p ? "is-active" : ""}`}
                onClick={() => setPrice(p)}
              >
                {p}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-divider" />

      <div className="filter-block">
        <h4 className="filter-heading">Rating</h4>
        <ul className="options-list">
          {RATINGS.map((r) => (
            <li key={r}>
              <button
                type="button"
                className={`filter-option ${rating === r ? "is-active" : ""}`}
                onClick={() => setRating(r)}
              >
                {r}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-actions">
        <button className="btn btn-clear" type="button" onClick={handleClear}>
          Clear All Filters
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
