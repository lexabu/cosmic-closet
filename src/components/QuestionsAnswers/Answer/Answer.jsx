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
        console.log('all answers :', data);
        setAnswers(data.data.results);
      })
      .catch((err) => {
        console.log('err :', err);
      });
  }

  useEffect(() => {
    getAllAnswers();
  }, []);

  return (
    <div>
      <div> Answer Comp </div>
      {/* <div> Answer Comp </div> */}
    </div>
  );
}

export default Answer;
