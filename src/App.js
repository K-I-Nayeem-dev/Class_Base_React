import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
// import ProgressBar from "react-scroll-progress-bar";


export default class App extends Component {
  
  pageSize = 30;
  country = 'us';
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress : 0,
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }


  render() {
    return (
      <>
      {/* <div>
        <ProgressBar height="6" bgcolor="#000" duration="0.2" progress={this.state.progress} /> */}
          <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={this.state.progress} />
            <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="general" country={this.country} category={'general'} apiKey={this.apiKey} customApi={this.customApi}/>} />
              <Route exact path="/business" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="business" country={this.country} category={'business'} apiKey={this.apiKey} />} />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="entertainment" country={this.country} category={'entertainment'} apiKey={this.apiKey} />} />
              <Route exact path="/health" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="health" country={this.country} category={'health'} apiKey={this.apiKey} />} />
              <Route exact path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="science" country={this.country} category={'science'} apiKey={this.apiKey} />} />
              <Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="sports" country={this.country} category={'sports'} apiKey={this.apiKey} />} />
              <Route exact path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="technology" country={this.country} category={'technology'} apiKey={this.apiKey} />} />
            </Routes>
          </Router>
        {/* </div> */}
      </>
    )
  }
}

