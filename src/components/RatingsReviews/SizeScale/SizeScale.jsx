import React from 'react';
import { RatingScale } from '../index.js';
import './SizeScale.scss';

function SizeScale() {
  return (
    <RatingScale
      name="Size"
      label1="Too small "
      label2="Perfect"
      label3="Too Large"
    />
  );
}

export default SizeScale;
