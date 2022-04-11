import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import ProductDetail from './containers/ProductDetail.jsx';
import QuestionsAnswers from './containers/QuestionsAnswers.jsx';
import RatingsReviews from './containers/RatingsReviews.jsx';
import { detailStore } from './stores.js';

function App() {
  const handleAnalytics = detailStore((state) => state.handleAnalytics);

  useEffect(() => {
    window.addEventListener('click', handleAnalytics);
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
