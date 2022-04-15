import React from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { questionsStore, detailStore } from '../../../stores.js';
import './AddQuestionModal.scss';

function AddQuestionModal() {
  const questionModalToggle = questionsStore((state) => state.questionModalToggle);
  const setQuestionModalToggle = questionsStore((state) => state.setQuestionModalToggle);
  const productDetails = detailStore((state) => state.productDetails);
  const setQuestions = questionsStore((state) => state.setQuestions);
  const { id } = useParams();

  function handleSubmit() {
    axios({
      url: `${process.env.URL}qa/questions`,
      method: 'POST',
      headers: {
        Authorization: process.env.GITHUB_API_KEY,
      },
      data: {
        body: 'ksdjf',
        name: 'sdf',
        email: 'asd@ksnd.com',
        product_id: id,
      },
    })
      .then(() => {
        axios({
          url: `${process.env.URL}qa/questions`,
          method: 'GET',
          headers: {
            Authorization: process.env.GITHUB_API_KEY,
          },
          params: {
            product_id: id,
            count: 100,
          },
        })
          .then((data) => {
            setQuestions(data.data.results);
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        throw err;
      });
  }
  // NEXT STEPS:
  // Create a variables to hold the current state of the inputs: body, name, email
  // Create handleChange function to update those inputs in state
  // add those inputs to the request

  if (questionModalToggle) {
    return (
      <div className="qa-question-modal">
        <div className="qa-question-modal-content">
          <div className="qa-question-modal-header">
            <h2 className="qa-question-modal-title">Ask Your Question</h2>
          </div>
          <div className="qa-question-modal-sub-header">
            <h3 className="qa-question-modal-title">{`About the ${productDetails.name}`}</h3>
          </div>

          <form className="qa-question-modal-form" onSubmit={setQuestionModalToggle}>
            <label htmlFor="question" className="qa-question-modal-label">
              Your Question*:
              <textarea id="question" rows="4" cols="50" maxLength={1000} placeholder="Why did you like the product or not?" />
            </label>
            <label htmlFor="nickname" className="qa-question-modal-label">
              Nickname*:
              <input type="text" id="nickname" maxLength={60} placeholder="jackson11!" />
              <h5>For privacy reasons, do not use your full name or email address</h5>
            </label>
            <label htmlFor="email" className="qa-question-modal-label">
              email*:
              <input type="text" id="email" placeholder="example@gmail.com" maxLength={60} />
              <h5>For authentication reasons, you will not be emailed</h5>
            </label>
            <input className="submit-button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddQuestionModal;
