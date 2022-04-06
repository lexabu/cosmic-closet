/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
// import Answer from '../index.js';
import Answer from '../Answer/Answer.jsx';

function Question({ questionObj }) {
  return (
    <div>
      <div>{`Q: ${questionObj.question_body}`}</div>
      <div>Helpful? Yes({questionObj.question_helpfulness}) | Add Answer</div>
      <Answer />
    </div>
  );
}
export default Question;
