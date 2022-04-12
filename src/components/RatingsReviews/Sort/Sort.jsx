import React, { useState, useEffect } from 'react';
import { reviewStore } from '../../../stores.js';
import './Sort.scss';

function Sort() {
  const [sortOption, setSortOption] = useState('relevance'); // first is always a value, second is always a fn that changes first
  const helpfulReviews = reviewStore((state) => state.helpfulReviews);
  const newestReviews = reviewStore((state) => state.newestReviews);
  const relevantReviews = reviewStore((state) => state.relevantReviews);
  const reviews = reviewStore((state) => state.reviews);
  const setReviews = reviewStore((state) => state.setReviews);

  const updateSortType = () => {
    if (sortOption === 'newest') {
      setReviews(newestReviews);
    }
    if (sortOption === 'helpful') {
      setReviews(helpfulReviews);
    }
    if (sortOption === 'relevance') {
      setReviews(relevantReviews);
    }
  };

  useEffect(() => {
    updateSortType();
  });

  if (reviews) {
    const { results } = reviews;
    if (results) {
      const numberOfReviews = results.length;

      return (
        <span className="rr-sort">

          <span className="rr-sort-reviews">
            {numberOfReviews}
          </span>

          &nbsp;

          <span className="rr-sort-text">
            reviews, sorted by
          </span>

          &nbsp;

          <u className="rr-sort-sort-type">
            <select
              name="sort-options"
              defaultValue="relevance"
              onChange={(event) => {
                setSortOption(event.target.value);
              }}
            >
              <option value="newest">newest</option>
              <option value="helpful">helpful</option>
              <option value="relevance">relevance</option>

            </select>
          </u>
        </span>
      );
    }
  }
  return <div className="loading"> Loading...</div>;
}

export default Sort;
