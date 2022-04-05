import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { questionsStore } from '../../../stores.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
// import dummyQuestions from './dummyQuestions.js';
// import { useParams} from 'react-router-dom';

function QuestionList() {
  const setQuestions = questionsStore((state) => state.setQuestions);
  const allQuestions = questionsStore((state) => state.questions);
  const { id } = useParams();

  useEffect(() => {
    axios({
      url: `${process.env.URL}qa/questions?product_id=${id}`,
      method: 'GET',
      headers: {
        Authorization: process.env.GITHUB_API_KEY,
      },
    })
      .then((data) => {
        console.log('data :', data);
        setQuestions(data.data.results);
      })
      .catch((err) => {
        console.log('err :', err);
      });
  }, []);

  console.log(allQuestions);

  function mapQuestions(questionsArr) {
    return questionsArr.map((question) => (
      <div key={question.question_id}>
        <div>{`Q: ${question.question_body}`}</div>
        <div>
          Helpful?
          <a href="Yes">Yes</a>
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
