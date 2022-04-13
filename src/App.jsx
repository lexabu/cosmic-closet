import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Drawer, Table, ActionIcon } from '@mantine/core';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import ProductDetail from './containers/ProductDetail.jsx';
import QuestionsAnswers from './containers/QuestionsAnswers.jsx';
import RatingsReviews from './containers/RatingsReviews.jsx';

function App() {
  const headers = {
    Authorization: process.env.GITHUB_API_KEY,
  };

  const handleAnalytics = (e) => {
    // Get the widget
    let widgetFound = false;
    let widget;

    e.path.forEach((path) => {
      if (widgetFound) { return; }
      if (path.classList && path.classList.contains('widget')) {
        widget = path.id;
        widgetFound = true;
      }
    });

    // Get the clicked element
    const element = e.target.outerHTML;

    // Get current time
    const time = new Date();
    if (widgetFound) {
      axios.post(`${process.env.URL}interactions`, { element, widget, time }, { headers })
        .catch((err) => {
          throw err;
        });
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleAnalytics);

    return () => {
      window.removeEventListener('click', handleAnalytics);
    };
  }, []);

  const [cartContents, setCartContents] = useState([]);

  const cartArr = cartContents.map((element) => (
    <tr key={element.sku_id}>
      <td>{element.sku_id}</td>
      <td>{element.count}</td>
    </tr>
  ))

  useEffect(() => {
    axios.get(`${process.env.URL}cart`, { headers })
      .then((response) => {
        console.log(response);
        setCartContents(response.data);
      });
  }, []);

  const [cartOpened, setCartOpened] = useState(false);
  // console.log('app');
  // console.log('cartOpened', cartOpened);
  // console.log('setCartOpened', setCartOpened);
  return (
    <>
      {/* NAVBAR */}
      <div className="top-banner">
        <ul className="nav-list">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
        </ul>
        <ActionIcon className="cart-icon" onClick={() => { setCartOpened(true); }}>
          <AiOutlineShoppingCart />
        </ActionIcon>
        <Drawer
          opened={cartOpened}
          onClose={() => setCartOpened(false)}
          position="right"
        >
          <Table className="cart-table" striped highlightOnHover verticalSpacing="md" fontSize="md">
            <thead>
              <tr>
                <th>Sku</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>{cartArr}</tbody>
          </Table>
        </Drawer>
      </div>
      {/* MAIN SECTIONS */}
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
    </>
  );
}

export default App;
