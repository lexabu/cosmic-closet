import React, { useEffect } from 'react';

import axios from 'axios';
import { questionsStore } from '../../../stores.js';

// Up to two answers should display for each question.
function Answer({ questionObj }) {
  const setAnswers = questionsStore((state) => state.setAnswers);
  const allAnswers = questionsStore((state) => state.answers);

  function getAllAnswers() {
    axios({
      url: `${process.env.URL}qa/questions/${questionObj.question_id}/answers`,
      method: 'GET',
      headers: {
        Authorization: process.env.GITHUB_API_KEY,
      },
    })
      .then((data) => {
        // console.log('all answers :', data.data.results);
        setAnswers(data.data.results);
      })
      .catch((err) => {
        console.log('err :', err);
      });
  }

  useEffect(() => {
    getAllAnswers();
  }, []);

  console.log('All ans in state :', allAnswers);
  console.log('Ans Obj in answers comp :', questionObj.answers);

  // function answerSort() {
  // sorting the answer list per rating
  // split ans array into two groups, the “seller” group and the “by other”,
  // then sort each by rating as requested, then joining
  // }

  function mapAnswers(answersObj) {
    const answerObjsArr = Object.values(answersObj);

    return answerObjsArr.map((answer) => (
      <div key={answer.id}>
        <div>{`A: ${answer.body}`}</div>
        <div>{`by ${answer.answerer_name} ${answer.date.slice(0, 10)} | Helpful?`}</div>
        <div>{`Yes(${answer.helpfulness}) | `}</div>
        <div>Report</div>
      </div>
    ));
  }
  // Up to two answers should display for each question.
  return (
    <div>
      {mapAnswers(questionObj.answers)}
    </div>
  );
}

export default Answer;
