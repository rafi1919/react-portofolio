import React from 'react';
import { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Porto from './components/Porto';
import Running from './components/Running';
import Contact from './components/Contact'

class App extends Component{
render() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Header />
      <Porto />
      <Running />
      <About />
      <Contact />
    </Router>
  );
}
}
export default App;
