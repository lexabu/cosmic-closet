import React from 'react';
import { createRoot } from 'react-dom/client'; // new way for React 18
// import reactDOM from "react-dom"; //old way for React 17
import App from './App.jsx';

// TODO
// our scss import statement
// import "./index.scss";

// TODO AIRBNB linter

// render the App
const container = document.getElementById('root');
// createRoot is a new method for React 18 that is imported in the import statements
const root = createRoot(container);
root.render(<App />);

// createRoot(document.getElementById('root')).render(<App />) // new way
// reactDOM.render(<App />, document.getElementById("root")); // old way
