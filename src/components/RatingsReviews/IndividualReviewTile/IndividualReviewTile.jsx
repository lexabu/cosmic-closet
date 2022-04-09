/* eslint-disable max-len */
import React from 'react';
import './IndividualReviewTile.scss';
// import axios from 'axios';
import { reviewStore } from '../../../stores.js';
import { StarRating } from '../index.js';

function IndividualReviewTile() {
  const reviews = reviewStore((state) => state.reviews);
  const rating = reviewStore((state) => state.averageRating);
  const { allReviews } = reviews;
  // console.log('allReviews: ', allReviews);

  return (
    <div className="rr-individual-review-tile">
      <span>
        <StarRating
          rating={rating}
        />
        || Verified Purchaser
        || Date of Review
      </span>
      <div>
        Review Summary
      </div>
      <div>
        Review body
      </div>
      <div>
        “I recommend this product”
      </div>
      <div>
        Response to Review
      </div>
      <span>
        Rating Helpfulness || Report
      </span>
    </div>
  );
}

export default IndividualReviewTile;

// function Question({ questionObj, getAllQuestions }) {
//   const wasHelpful = questionsStore((state) => state.wasHelpful);
//   const addHelpful = questionsStore((state) => state.addHelpful);

//   function getUpdateHelpfulness(question) {
//     // ONLY if this question's id was NOT found in the wasHelpful array,
//     if (!wasHelpful.includes(question.question_id)) {
//       // send a PUT and GET to update helpful quantity in api
//       axios({
//         url: `${process.env.URL}qa/questions/${question.question_id}/helpful`,
//         method: 'PUT',
//         headers: {
//           Authorization: process.env.GITHUB_API_KEY,
//         },
//       })
//         .then(() => {
//           getAllQuestions();
//           addHelpful(question.question_id);
//         })
//         .catch((err) => {
//           throw err;
//         });
//     }
//   }

//   function handleKeyPress(event, question) {
//     if (event.key === 'Enter') {
//       getUpdateHelpfulness(question);
//     }
//   }

//   return (
//     <div>{`${review.question_body}`}</div>
//     <div>Helpful? | </div>
//     <div
//       role="button"
//       tabIndex={0}
//       onKeyPress={() => (handleKeyPress(questionObj))}
//       onClick={() => (getUpdateHelpfulness(questionObj))}
//     >
//       Yes({questionObj.question_helpfulness})
//     </div>
//     <div> | Add Answer</div>
//     <Answer questionObj={questionObj} />

//   );
// }
// export default Question;
