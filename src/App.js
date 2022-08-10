import React from 'react';
import { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Porto from './components/Porto'

class App extends Component{
render() {
  return (
    <Router>
      <Navbar />
      <Header />
      <About />
      <Porto />
    </Router>
  );
}
}
export default App;
