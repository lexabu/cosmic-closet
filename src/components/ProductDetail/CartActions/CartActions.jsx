import React from 'react';
import { detailStore } from '../../../stores.js';
import SizeSelector from '../SizeSelector/SizeSelector.jsx';
import QuantitySelector from '../QuantitySelector/QuantitySelector.jsx';
import AddToCart from '../AddToCart/AddToCart.jsx';
import './CartActions.scss';

function CartActions() {
  // const selectedStyle = detailStore((state) => state.selectedStyle);
  // const selectedSize = detailStore((state) => state.selectedSize);
  // const setSelectedSize = detailStore((state) => state.setSelectedSize);
  const selectedStyle = detailStore((state) => state.selectedStyle);

  if (Object.keys(selectedStyle).length === 0) {
    return <span>Loading styles...</span>;
  }

  // Make checks for OUT OF STOCK items
  const vals = Object.values(selectedStyle.skus);
  let qtySum = 0;

  vals.forEach((sku) => {
    qtySum += sku.quantity;
  });

  // if ((vals.length === 1 && vals[0].quantity == null) || qtySum === 0) {
  //   return (
  //     <select disabled>
  //       <option>OUT OF STOCK</option>
  //     </select>
  //   );
  // }

  return (
    <div className="cart-actions-container">
      <div className="pd-selectors-container">
        <SizeSelector />
        <QuantitySelector />
      </div>
      {/* Don't show Button if out of stock */}
      {!((vals.length === 1 && vals[0].quantity == null) || qtySum === 0) && <AddToCart />}
    </div>
  );
}

export default CartActions;
