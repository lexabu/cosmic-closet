import React, { useEffect } from 'react';

// import axios from 'axios';
import { questionsStore } from '../../../stores.js';

// Up to two answers should display for each question.
function Answer({ questionObj }) {
  // const setAnswers = questionsStore((state) => state.setAnswers);
  // const allAnswers = questionsStore((state) => state.answers);

  // function getAllAnswers() {
  //   axios({
  //     url: `${process.env.URL}qa/questions/${questionObj.question_id}/answers`,
  //     method: 'GET',
  //     headers: {
  //       Authorization: process.env.GITHUB_API_KEY,
  //     },
  //   })
  //     .then((data) => {
  //       // console.log('all answers :', data.data.results);
  //       setAnswers(data.data.results);
  //     })
  //     .catch((err) => {
  //       console.log('err :', err);
  //     });
  // }

  // useEffect(() => {
  //   getAllAnswers();
  // }, []);

  // console.log('All ans in state :', allAnswers);
  // console.log('Ans Obj in answers comp :', questionObj.answers);

  function answerSort(arr) {
    // create a final array
    const final = [];
    // place in ascending order
    const ascending = arr.sort((a, b) => b.helpfulness - a.helpfulness);
    // iterate over sorted array
    for (let i = 0; i < ascending.length; i += 1) {
      if (ascending[i].answerer_name === 'Seller') {
        // unshift all seller answers to front of final arr
        final.unshift(ascending[i]);
      } else {
        // push all other answers to the end of the arr
        final.push(ascending[i]);
      }
    }
    // return final loop
    return final;
  }

  const max = questionsStore((state) => state.max);

  function mapAnswers(answersObj) {
    const answerObjsArr = Object.values(answersObj);
    // console.log('answerObjsArr', answerObjsArr);
    return answerSort(answerObjsArr).map((answer, index) => {
      // console.log('answer', answer);
      // if current index is less than MAX, then return:
      if (index < max) {
        return (
          <div key={answer.id}>
            <div>{`A: ${answer.body}`}</div>
            <div>{`by ${answer.answerer_name} ${answer.date.slice(0, 10)} | Helpful?`}</div>
            <div>{`Yes(${answer.helpfulness}) | `}</div>
            <div>Report</div>
          </div>
        );
      }
      return <div key={answer.id} />;
    });
  }
  // Up to two answers should display for each question.
  return (
    <div>
      {mapAnswers(questionObj.answers)}
    </div>
  );
}

export default Answer;

// Array.prototype.map() expects a value to be returned at the end of arrow function.
