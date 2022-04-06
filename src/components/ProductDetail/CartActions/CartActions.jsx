import React from 'react';
// import { detailStore } from '../../../stores.js';
import SizeSelector from '../SizeSelector/SizeSelector.jsx';
import './CartActions.scss';

function CartActions() {
  // const selectedStyle = detailStore((state) => state.selectedStyle);
  // const selectedSize = detailStore((state) => state.selectedSize);
  // const setSelectedSize = detailStore((state) => state.setSelectedSize);

  return (
    <SizeSelector />
  );
}

export default CartActions;
