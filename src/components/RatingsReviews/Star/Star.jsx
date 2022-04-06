import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Star.scss';

function Star({ filled }) {
  return (
    <FaStar
      className="star"
      color={filled ? 'blue' : 'lightgray'}
    />
  );
}
export default Star;
