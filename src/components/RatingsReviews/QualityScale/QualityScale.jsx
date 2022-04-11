import React from 'react';
import { RatingScale } from '../index.js';
import './QualityScale.scss';

function QualityScale() {
  return (
    <div>
      <RatingScale
        name="Quality"
        label1="Poor"
        label2=" "
        label3="Perfect"
      />
    </div>
  );
}

export default QualityScale;
