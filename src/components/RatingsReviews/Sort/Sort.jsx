import React from 'react';
import './Sort.scss';

function Sort() {
  const numberOfReviews = '100';
  const sortType = 'relevance';
  return (
    <div className="rr-sort">
      {numberOfReviews}
      {' '}
      reviews, sorted by
      {' '}
      {sortType}
    </div>
  );
}

export default Sort;
