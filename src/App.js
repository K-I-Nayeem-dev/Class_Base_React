import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  
  pageSize = 30;
  country = 'us';

  render() {
    return (
      <>
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<News pageSize={this.pageSize} key="general" country={this.country} category={'general'} />} />
            <Route exact path="/business" element={<News pageSize={this.pageSize} key="business" country={this.country} category={'business'} />} />
            <Route exact path="/entertainment" element={<News pageSize={this.pageSize} key="entertainment" country={this.country} category={'entertainment'} />} />
            <Route exact path="/health" element={<News pageSize={this.pageSize} key="health" country={this.country} category={'health'} />} />
            <Route exact path="/science" element={<News pageSize={this.pageSize} key="science" country={this.country} category={'science'} />} />
            <Route exact path="/sports" element={<News pageSize={this.pageSize} key="sports" country={this.country} category={'sports'} />} />
            <Route exact path="/technology" element={<News pageSize={this.pageSize} key="technology" country={this.country} category={'technology'} />} />
          </Routes>
        </Router>
      </>
    )
  }
}

