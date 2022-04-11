import React from 'react';
import { RatingScale } from '../index.js';
import './FitScale.scss';

function FitScale() {
  return (
    <div>
      <RatingScale
        name="Fit"
        label1="Short"
        label2="Perfect"
        label3="Long"
      />
    </div>
  );
}

export default FitScale;
