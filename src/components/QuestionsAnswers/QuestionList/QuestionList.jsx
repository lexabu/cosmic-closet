import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { questionsStore } from '../../../stores.js';
import SearchBar from '../SearchBar/SearchBar.jsx';

function QuestionList() {
  const setQuestions = questionsStore((state) => state.setQuestions);
  const allQuestions = questionsStore((state) => state.questions);
  const { id } = useParams();

  // API call to access all questions associated with the current product
  useEffect(() => {
    axios({
      url: `${process.env.URL}qa/questions?product_id=${id}`,
      method: 'GET',
      headers: {
        Authorization: process.env.GITHUB_API_KEY,
      },
    })
      .then((data) => {
        setQuestions(data.data.results);
      })
      .catch((err) => {
        console.log('err :', err);
      });
  }, []);

  function mapQuestions(questionsArr) {
    return questionsArr.map((question) => (
      <div key={question.question_id}>
        <div>{`Q: ${question.question_body}`}</div>
        <div>
          Helpful?
          <a href="#Yes">Yes</a>
          (0)|
          <a href="#Add Answer">Add Answer</a>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <div>
        <div className="title"> Questions & Answers</div>
        <SearchBar />
        <div>{mapQuestions(allQuestions)}</div>
        {/* The following div is hard-coded. It will be replaced
        once my Answer comp is up and running */}
        <div>
          A: Answer1
          <div>by user1, May 14, 2022</div>
          Answer2
          <div>by user1, May 15, 2022</div>
        </div>
      </div>
      <button type="button">More Answered Questions</button>
    </div>
  );
}

export default QuestionList;
