// Test for zustand!
import React from 'react';
import { detailStore } from '../stores.js';
import Nested from './nested.jsx';

function ProductDetail() {
  const count = detailStore((state) => state.counter);

  return (
    <>
      <h1>ProductDetail</h1>
      <h2>{`Count: ${count}`}</h2>
      <Nested />
    </>
  );
}

export default ProductDetail;
