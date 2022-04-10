import React, { useEffect } from 'react';

import axios from 'axios';
import { questionsStore } from '../../../stores.js';
import { MoreAnswers } from '../index.js';

function Answer({ questionObj }) {
  const setAnswers = questionsStore((state) => state.setAnswers);
  const allQuestions = questionsStore((state) => state.questions);

  function intialMaxAnswers(questions) {
    // create an empty arr
    const maxAnswers = [];
    // map over questions
    for (let i = 0; i < questions.length; i += 1) {
      const question = questions[i];
      if (question.question_id) {
        maxAnswers.push({ [question.question_id]: 2 });
      }
    }
    return maxAnswers;
  }

  function getAllAnswers() {
    axios({
      url: `${process.env.URL}qa/questions/${questionObj.question_id}/answers`,
      method: 'GET',
      headers: {
        Authorization: process.env.GITHUB_API_KEY,
      },
    })
      .then((data) => {
        setAnswers(data.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }

  useEffect(() => {
    getAllAnswers();
  }, []);

  const setMaxAnswersArr = questionsStore((state) => state.setMaxAnswersArr);

  useEffect(() => {
    setMaxAnswersArr(intialMaxAnswers(allQuestions));
  }, allQuestions);

  function answerSort(arr) {
    const final = [];
    const ascending = arr.sort((a, b) => b.helpfulness - a.helpfulness);

    for (let i = 0; i < ascending.length; i += 1) {
      if (ascending[i].answerer_name === 'Seller') {
        final.unshift(ascending[i]);
      } else {
        final.push(ascending[i]);
      }
    }
    return final;
  }

  // console.log('created initialMaxAnswers', intialMaxAnswers(allQuestions));

  // const maxAnswers = questionsStore((state) => state.maxAnswers);
  const maxAnswersArr = questionsStore((state) => state.maxAnswersArr);

  function mapAnswers(answersObj) {
    const answerObjsArr = Object.values(answersObj);

    return answerSort(answerObjsArr).map((answer, index) => {
      // console.log('quest id :', questionObj.question_id);
      // console.log('maxAnswersArr', maxAnswersArr);
      const questionId = questionObj.question_id;
      for (let i = 0; i < maxAnswersArr.length; i += 1) {
        const maxAnswer = maxAnswersArr[i];
        // console.log('maxAn :', maxAnswer[questionId]);
        if (index < maxAnswer[questionId]) {
          return (
            <div key={answer.id}>
              <div>{`A: ${answer.body}`}</div>
              <div>{`by ${answer.answerer_name} ${answer.date.slice(0, 10)} | Helpful?`}</div>
              <div>{`Yes(${answer.helpfulness}) | `}</div>
              <div>Report</div>
            </div>
          );
        }
      }
      return <div key={answer.id} />;
    });
  }

  return (
    <div>
      {mapAnswers(questionObj.answers)}
      <MoreAnswers questionObj={questionObj} />
    </div>
  );
}

export default Answer;
