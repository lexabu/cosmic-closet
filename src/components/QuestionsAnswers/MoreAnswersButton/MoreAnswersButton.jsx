import React from 'react';
import { questionsStore } from '../../../stores.js';

function MoreAnswersButton({ questionObj }) {
  const maxAnswersArr = questionsStore((state) => state.maxAnswersArr);
  const setMaxAnswersArr = questionsStore((state) => state.setMaxAnswersArr);

  function addAnsweredQuestions(question) {
    const questionId = question.question_id;
    const arr = [];

    for (let i = 0; i < maxAnswersArr.length; i += 1) {
      const maxAnswerObj = maxAnswersArr[i];
      if (maxAnswerObj[questionId]) {
        arr.push({ [questionId]: maxAnswerObj[questionId] + 2 });
      } else {
        arr.push(maxAnswerObj);
      }
    }
    setMaxAnswersArr(arr);
  }

  const questionId = questionObj.question_id;
  const anwserListLength = Object.keys(questionObj.answers).length;

  for (let i = 0; i < maxAnswersArr.length; i += 1) {
    const maxAnswerObj = maxAnswersArr[i];
    if (maxAnswerObj[questionId] < anwserListLength) {
      return (
        <button className="small-pill" onClick={() => (addAnsweredQuestions(questionObj))} type="button">See More Answers</button>
      );
    }
  }
}

export default MoreAnswersButton;
