import React from 'react';
import { reviewStore } from '../../../stores.js';
import './Sort.scss';

function Sort() {
  const reviews = reviewStore((state) => state.reviews);
  if (reviews) {
    const { results } = reviews;
    if (results) {
      const numberOfReviews = results.length;
      const sortChange = () => {
        // when a change event happens
        // send the value as a parameter to the axios request

        // eslint-disable-next-line max-len
        // get all sort options from start in RR, then just get that info from state when onchange happends
      };

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
            <select name="sort-options" defaultValue="relevance" onChange={sortChange}>
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
