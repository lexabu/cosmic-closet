import React from 'react';

// import functionality for routing in React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';

import { createRoot } from 'react-dom/client'; // new way for React 18
// import reactDOM from "react-dom"; //old way for React 17

import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import './index.scss';
import App from './pages/App.jsx';
import Home from './pages/Home.jsx';

const queryClient = new QueryClient();

// render the App
const container = document.getElementById('root');
// createRoot is a new method for React 18 that is imported in the import statements
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    {/* // BrowserRouter is a tool that lets you specify a component to be shown
    // based on the URL path. We only have one page showing our App component,
    // but we have multiple products. The :id is basically a wildcard that will
    // give the name 'id' to whatever is in that spot. Now we can have multiple
    // URLs referring to different products, while all coming from the same components. */}
    <BrowserRouter>
      <Routes>
        {/* /:id means any path with something after the '/' will be the id.
                     i.e. :   localhost:3000/123 -> id === 123
          or when deployed:         site.com/123 -> id === 123
      */}
        <Route
          path="/"
          element={(
            <>
              <Home />
              <ReactQueryDevtools initialIsOpen={false} />
            </>
          )}
        />
        {/* <Route path="/about" element={<Home />} /> */}
        <Route
          path="/:id"
          element={
            (
              <MantineProvider theme={{
                primaryColor: 'cyan',
              }}
              >
                <NotificationsProvider
                  position="top-right"
                  zIndex={9999}
                >
                  <App />
                  <ReactQueryDevtools initialIsOpen={false} />
                </NotificationsProvider>
              </MantineProvider>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
);

// createRoot(document.getElementById('root')).render(<App />) // new way
// reactDOM.render(<App />, document.getElementById("root")); // old way
