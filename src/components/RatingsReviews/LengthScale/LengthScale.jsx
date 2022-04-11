import React from 'react';
import { RatingScale } from '../index.js';
import './LengthScale.scss';

function LengthScale() {
  return (
    <div>
      <RatingScale
        name="Length"
        label1="Short"
        label2="Perfect"
        label3="Long "
      />
    </div>
  );
}

export default LengthScale;
