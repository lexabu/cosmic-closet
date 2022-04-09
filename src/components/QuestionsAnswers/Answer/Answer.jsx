import React, { useEffect } from 'react';

import axios from 'axios';
import { questionsStore } from '../../../stores.js';
import { MoreAnswers } from '../index.js';

function Answer({ questionObj }) {
  const setAnswers = questionsStore((state) => state.setAnswers);
  const allQuestions = questionsStore((state) => state.questions);
  const setMaxAnswersArr = questionsStore((state) => state.setMaxAnswersArr);
  console.log(allQuestions);

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

  const maxAnswers = questionsStore((state) => state.maxAnswers);

  function mapAnswers(answersObj) {
    const answerObjsArr = Object.values(answersObj);

    return answerSort(answerObjsArr).map((answer, index) => {
      if (index < maxAnswers) {
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

  return (
    <div>
      {mapAnswers(questionObj.answers)}
      <MoreAnswers allAnswers={questionObj.answers} />
    </div>
  );
}

export default Answer;
