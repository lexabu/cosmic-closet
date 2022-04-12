import React from 'react';
import { RatingScale } from '../index.js';
import './FitScale.scss';

function FitScale() {
  return (
    <div>
      <RatingScale
        name="Fit"
        label1="Runs Short"
        label2="Perfect"
        label3="Runs Long"
      />
    </div>
  );
}

export default FitScale;
