import React, { useEffect } from 'react';

import axios from 'axios';
import { questionsStore } from '../../../stores.js';

function Answer({ questionObj }) {
  const setAnswers = questionsStore((state) => state.setAnswers);
  // const allAnswers = questionsStore((state) => state.answers);

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
        // console.log('err :', err);
      });
  }

  useEffect(() => {
    getAllAnswers();
  }, []);

  // console.log('after call ans :', allAnswers);

  // function answerSort() {
  // sorting the answer list per rating
  // split ans array into two groups, the “seller” group and the “by other”,
  // then sort each by rating as requested, then joining
  // }

  function mapAnswers(answersObj) {
<<<<<<< HEAD
    // console.log('answersObj :', answersObj);
    // console.log('answersObjValues :', Object.values(answersObj));
    return Object.values(answersObj).map((answer) => (
      // console.log('answer :', answer)
=======
    const answerObjsArr = Object.values(answersObj);

    return answerObjsArr.map((answer) => (
>>>>>>> bd37771a966bbe9406ae9266646d0f0790bb00ca
      <div key={answer.id}>
        <div>{`A: ${answer.body}`}</div>
        <div>{`by ${answer.answerer_name} ${answer.date.slice(0, 10)} | Helpful? Yes(${answer.helpfulness}) | Report`}</div>
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
