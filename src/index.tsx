import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

////////////////Pages/////////////////////////
import App from './pages/Home/App';
import Detailed from './pages/Detailed/Info';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:pokemon/detailed" element={<Detailed />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

reportWebVitals();
