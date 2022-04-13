/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { questionsStore } from '../../../stores.js';
import { Answer } from '../index.js';
import './Question.scss';

function Question({ questionObj, getAllQuestions }) {
  // console.log('quest questionObj :', questionObj);
  const wasHelpful = questionsStore((state) => state.wasHelpful);
  const addHelpful = questionsStore((state) => state.addHelpful);

  function getUpdateHelpfulness(question) {
    // ONLY if this question's id was NOT found in the wasHelpful array,
    if (!wasHelpful.includes(question.question_id)) {
      // send a PUT and GET to update helpful quantity in api
      axios({
        url: `${process.env.URL}qa/questions/${question.question_id}/helpful`,
        method: 'PUT',
        headers: {
          Authorization: process.env.GITHUB_API_KEY,
        },
      })
        .then(() => {
          getAllQuestions();
          addHelpful(question.question_id);
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  function handleKeyPress(event, question) {
    if (event.key === 'Enter') {
      getUpdateHelpfulness(question);
    }
  }

  return (
    <div className="qa-question-container">
      <div className="qa-question-parts-container">
        <div className="qa-question-body">
          <span className="qa-question-tag">Q:</span>
          {`${questionObj.question_body}`}
        </div>
        <div className="qa-sub-question-parts-container">
          <div className="qa-sub-question helpful">Helpful?</div>
          <div
            className="qa-sub-question"
            role="button"
            tabIndex={0}
            onKeyPress={() => (handleKeyPress(questionObj))}
            onClick={() => (getUpdateHelpfulness(questionObj))}
          >
            <span className="qa-sub-question yes">| Yes({questionObj.question_helpfulness})</span>
          </div>
          <button id="addAnswer" className="qa-sub-question" type="button">| Add Answer</button>
        </div>
      </div>
      <Answer questionObj={questionObj} />
    </div>
  );
}
export default Question;
