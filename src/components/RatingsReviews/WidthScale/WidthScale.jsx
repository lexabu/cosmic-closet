import React from 'react';
import { RatingScale } from '../index.js';
import './WidthScale.scss';

function WidthScale() {
  return (
    <div>
      <RatingScale
        name="Width"
        label1="Too narrow"
        label2="Perfect"
        label3="Too Wide"
      />
    </div>
  );
}

export default WidthScale;
