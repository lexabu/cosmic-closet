import React, { useEffect } from 'react';

import axios from 'axios';
import { questionsStore } from '../../../stores.js';

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
        console.log('all answers :', data.data.results);
        setAnswers(data.data.results);
      })
      .catch((err) => {
        console.log('err :', err);
      });
  }

  useEffect(() => {
    getAllAnswers();
  }, []);

  console.log('after call ans :', allAnswers);

  function mapAnswers(answersObj) {
    console.log('answersObj :', answersObj);
    console.log('answersObjValues :', Object.values(answersObj));
    return Object.values(answersObj).map((answer) => (
      // console.log('answer :', answer)
      <div key={answer.id}>
        <div>{`A: ${answer.body}`}</div>
        <div>{`by ${answer.answerer_name}, ${answer.date} | Helpful? Yes(${answer.helpfulness}) | Report`}</div>
      </div>
    ));
  }

  return (
    <div>
      {mapAnswers(questionObj.answers)}
    </div>
  );
}

export default Answer;
