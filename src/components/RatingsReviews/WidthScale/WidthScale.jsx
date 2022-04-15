import React from 'react';
import { RatingScale } from '../index.js';
import './WidthScale.scss';

function WidthScale() {
  return (
    <RatingScale
      name="Width"
      label1="Too narrow"
      label2="Perfect"
      label3="Too Wide"
    />
  );
}

export default WidthScale;
