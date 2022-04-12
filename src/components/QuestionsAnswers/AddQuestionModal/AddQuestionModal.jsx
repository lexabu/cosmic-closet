import React, { useState } from 'react';

import { questionsStore } from '../../../stores.js';
import './AddQuestionModal.scss';

function AddQuestionModal() {
  const questionModalToggle = questionsStore((state) => state.questionModalToggle);
  const setQuestionModalToggle = questionsStore((state) => state.setQuestionModalToggle);

  if (questionModalToggle) {
    return (
      <div className="qa-question-modal">
        <div className="qa-question-modal-content">
          <div className="qa-question-modal-header">
            <h2 className="qa-question-modal-title">Ask Your Question</h2>
          </div>
          <div className="qa-question-modal-sub-header">
            <h3 className="qa-question-modal-title">About the Product Name Here</h3>
          </div>
          {/* onSubmit={this.handleSubmit} */}
          <form className="qa-question-modal-form" onSubmit={setQuestionModalToggle}>
            <label htmlFor="question" className="qa-question-modal-label">
              Your Question*:
              <textarea id="question" rows="4" cols="50" maxLength={1000} placeholder="Why did you like the product or not?" />
              {/* <input type="text" id="question" /> */}
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
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddQuestionModal;
