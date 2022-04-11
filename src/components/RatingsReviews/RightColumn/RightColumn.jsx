import React from 'react';
import {
  Sort, ReviewsList, Buttons,
} from '../index.js';
import './RightColumn.scss';

function RightColumn() {
  return (
    <div className="rr-right-column">
      <Sort />
      <ReviewsList />
      <Buttons />
    </div>
  );
}

export default RightColumn;
