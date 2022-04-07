import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { detailStore } from '../../../stores.js';
import './SizeSelector.scss';

function SizeSelector() {
  const selectedStyle = detailStore((state) => state.selectedStyle);
  // const selectedSize = detailStore((state) => state.selectedSize);
  const setSelectedSize = detailStore((state) => state.setSelectedSize);
  const toggleShowSizeSelector = detailStore((state) => state.toggleShowSizeSelector);
  const showSizeSelector = detailStore((state) => state.showSizeSelector);

  const [shownSize, setShownSize] = useState('Select Size');

  if (Object.keys(selectedStyle).length === 0) {
    return <span>Loading styles...</span>;
  }

  // Make checks for OUT OF STOCK items
  // TODO: separate this into a utility function to be used again
  // in the CartActions component
  const vals = Object.values(selectedStyle.skus);
  let qtySum = 0;

  vals.forEach((sku) => {
    qtySum += sku.quantity;
  });

  if ((vals.length === 1 && vals[0].quantity == null) || qtySum === 0) {
    return (
      <select disabled>
        <option>OUT OF STOCK</option>
      </select>
    );
  }

  return (
    <div className="pd-size-selector-container">
      <button
        className="pd-size-button"
        type="button"
        onClick={() => {
          toggleShowSizeSelector();
        }}
      >
        <div className="pd-inner-button-container">
          <div className="inner-button-filler" />
          <h4>{shownSize}</h4>
          <AiFillCaretDown />
        </div>
      </button>
      <div className="pd-size-selector-options-container">
        {
          Object.keys(selectedStyle.skus).map((sku) => {
            const obj = selectedStyle.skus[sku];
            return (
              obj.quantity > 0
              && (
                <button
                  type="button"
                  className={`pd-dd-size-${showSizeSelector}`}
                  key={sku}
                  onClick={() => {
                    setSelectedSize(sku);
                    setShownSize(obj.size);
                    toggleShowSizeSelector(false);
                  }}
                >
                  {obj.size}
                </button>
              )
            );
          })
        }
      </div>
    </div>
  );

  // return (
  //   <select
  //     id="pd-size-selector"
  //     key="pd-size-selector"
  //     // className="pd-size-selector"
  //     onChange={(e) => { handleChange(e); }}
  //     onClick={() => { console.log('selector clicked'); }}
  //   >
  //     <option key="pd-select-size" value="">Select Size</option>
  //     {/* Map through all skus */}
  //     {Object.keys(selectedStyle.skus).map((sku) => {
  //       const obj = selectedStyle.skus[sku];
  //       return (
  //         obj.quantity > 0 && <option key={sku} value={sku}>{obj.size}</option>
  //       );
  //     })}
  //   </select>
  // );
}

export default SizeSelector;
