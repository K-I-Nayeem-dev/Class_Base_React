import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <>
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<News pageSize={30} key="general" country={'us'} category={'general'} />} />
            <Route exact path="/business" element={<News pageSize={30} key="business" country={'us'} category={'business'} />} />
            <Route exact path="/entertainment" element={<News pageSize={30} key="entertainment" country={'us'} category={'entertainment'} />} />
            <Route exact path="/health" element={<News pageSize={30} key="health" country={'us'} category={'health'} />} />
            <Route exact path="/science" element={<News pageSize={30} key="science" country={'us'} category={'science'} />} />
            <Route exact path="/sports" element={<News pageSize={30} key="sports" country={'us'} category={'sports'} />} />
            <Route exact path="/technology" element={<News pageSize={30} key="technology" country={'us'} category={'technology'} />} />
          </Routes>
        </Router>
      </>
    )
  }
}

