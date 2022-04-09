/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { questionsStore } from '../../../stores.js';
import { Answer, MoreAnswers } from '../index.js';

// By default, on page load up to four questions should be displayed.
function Question({ questionObj, getAllQuestions }) {
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

  // questionObj.max = 2
  // let questionObj = {
  //   id: 34235754623,
  //   body: "asdfkhjadsg regrha kf",
  //   max: 2,
  // }

  // By default, on page load up to four questions should be displayed.
  return (
    <div>
      <div>{`Q: ${questionObj.question_body}`}</div>
      <div>Helpful? | </div>
      <div
        role="button"
        tabIndex={0}
        onKeyPress={() => (handleKeyPress(questionObj))}
        onClick={() => (getUpdateHelpfulness(questionObj))}
      >
        Yes({questionObj.question_helpfulness})
      </div>
      <div> | Add Answer</div>
      <Answer questionObj={questionObj} />
      <MoreAnswers />
      {/* Add MoreAnswers button if there are > 2 answers */}
      {/* onClick --> questionObj.max = questionObj.max + 2 */}
    </div>
  );
}
export default Question;
