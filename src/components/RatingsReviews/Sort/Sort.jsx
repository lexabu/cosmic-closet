/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { reviewStore } from '../../../stores.js';
import './Sort.scss';

function Sort() {
  // const setSortOption = reviewStore((state) => state.setSortOption);
  const setReviews = reviewStore((state) => state.setReviews);
  const [sortOption, setSortOption] = useState('relevance');
  const { helpfulReviews, newestReviews, relevantReviews } = reviewStore;

  const updateSortType = () => {
    // if the sort option is newest, set reviews to newestReviews
    console.log(sortOption);
    if (sortOption === 'newest') {
      // setSortOption(sortOption);
      console.log('newestReviews: ', newestReviews);
      setReviews(newestReviews);
    }
    // if (sortOption === 'helpful') {
    //   console.log(sortOption);

    //   setSortOption(sortOption);
    //   setReviews(helpfulReviews);
    // }
    // if (sortOption === 'relevance') {
    //   console.log(sortOption);

    //   setSortOption(sortOption);
    //   setReviews(relevantReviews);
    // }
  };
  useEffect(() => {
    // Update the zustandStore when sortOption is
    updateSortType();
  });
  const reviews = reviewStore((state) => state.reviews);
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
                setSortOption(event.target.value)
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
