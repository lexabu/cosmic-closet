/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { Answer } from '../index.js';

function Question({ questionObj, handleQuestions }) {
  function getUpdateHelpfulness(question) {
    axios({
      url: `${process.env.URL}qa/questions/${question.question_id}/helpful`,
      method: 'PUT',
      headers: {
        Authorization: process.env.GITHUB_API_KEY,
      },
    })
      .then(() => {
        handleQuestions();
      })
      .catch((err) => {
        throw err;
      });
  }

  // function handleKeyPress(event, question) {
  //   if (event.key === 'Enter') {
  //     getUpdateHelpfulness(question);
  //   }
  // }

  return (
    <div>
      <div>{`Q: ${questionObj.question_body}`}</div>
      <div>Helpful? | </div>
      <div
        role="button"
        tabIndex={0}
        // onKeyPress={() => (handleKeyPress(questionObj))}
        onClick={() => (getUpdateHelpfulness(questionObj))}
      >
        Yes({questionObj.question_helpfulness})
      </div>
      <div> | Add Answer</div>
      <Answer questionObj={questionObj} />
    </div>
  );
}
export default Question;
