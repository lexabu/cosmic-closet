import React from 'react';
import { RatingScale } from '../index.js';
import './ComfortScale.scss';

function ComfortScale() {
  return (
    <RatingScale
      name="Comfort"
      label1="Uncomfortable"
      label2="Ok"
      label3="Perfect"
    />
  );
}

export default ComfortScale;
