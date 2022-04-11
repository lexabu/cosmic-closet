import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import ProductDetail from './containers/ProductDetail.jsx';
import QuestionsAnswers from './containers/QuestionsAnswers.jsx';
import RatingsReviews from './containers/RatingsReviews.jsx';

function App() {
  const handleAnalytics = (e) => {
    // Get the widget
    let widgetFound = false;
    let widget;

    e.path.forEach((path) => {
      if (widgetFound) { return; }
      if (path.classList.contains('widget')) {
        widget = path.id;
        widgetFound = true;
      }
    });

    // Get the clicked element
    const element = e.target.outerHTML;

    // Get current time
    const time = new Date();

    const headers = {
      Authorization: process.env.GITHUB_API_KEY,
    };

    axios.post(`${process.env.URL}interactions`, { element, widget, time }, { headers })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    window.addEventListener('click', handleAnalytics);

    return () => {
      window.removeEventListener('click', handleAnalytics);
    };
  }, []);

  return (
    <main>
      <ProductDetail />
      <QuestionsAnswers />
      <RatingsReviews />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </main>
  );
}

export default App;
