import React from 'react';
import './App.css';
import AllProduct from './components/AllProduct.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const showContentMenu = (routes) => {
    return routes.map((route, index) => (
      <Route key={index} path={route.path} element={<route.main />} />
    ));
  };

  return (
    <Router>
      <ToastContainer />
      <Routes>
        {showContentMenu(routes)}
      </Routes>
    </Router>
  );
};

export default App;
