import React from 'react';
import { RatingScale } from '../index.js';
import './QualityScale.scss';

function QualityScale() {
  console.log('QualityScale logging');
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

// return (
//   <RatingScale
//     name="Quality"
//     label1="Poor"
//     label2=" "
//     label3="Perfect"
//   />
// );

// const metaRatings = reviewStore((state) => state.ratings);
//   const { characteristics } = metaRatings;
//   if (characteristics) {
//     if (characteristics.Quality) {
//       const { Quality } = characteristics;
//       if (Quality.value) {
//         return (
//           <div className="rr-quality-scale">
//             <div className="rr-qs-title">
//               Quality
//             </div>
//             <progress className="rr-qs-progress progress" max={5} value={Quality.value} />
//             <div className="rr-qs-labels">
//               <span> Poor </span>
//               <span> Perfect </span>
//             </div>
//           </div>
//         );
//       }
//     }
//   }
