/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';

function Question({ questionObj }) {
  return (
    <div>
      <div>{`Q: ${questionObj.question_body}`}</div>
      <div>Helpful? Yes({questionObj.question_helpfulness}) | Add Answer</div>
    </div>
  );
}
export default Question;
