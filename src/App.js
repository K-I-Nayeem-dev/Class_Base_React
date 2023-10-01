import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
// import ProgressBar from "react-scroll-progress-bar";


  const App = ()=> {
  
  const pageSize = 30;
  const country = 'us';
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)

    return (
      <>
      {/* <div>
        <ProgressBar height="6" bgcolor="#000" duration="0.2" progress={progress} /> */}
          <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={progress} />
            <Routes>
              <Route exact path="/" element={<News setProgress={setProgress} pageSize={pageSize} key="general" country={country} category={'general'} apiKey={apiKey}/>} />
              <Route exact path="/business" element={<News setProgress={setProgress} pageSize={pageSize} key="business" country={country} category={'business'} apiKey={apiKey} />} />
              <Route exact path="/entertainment" element={<News setProgress={setProgress} pageSize={pageSize} key="entertainment" country={country} category={'entertainment'} apiKey={apiKey} />} />
              <Route exact path="/health" element={<News setProgress={setProgress} pageSize={pageSize} key="health" country={country} category={'health'} apiKey={apiKey} />} />
              <Route exact path="/science" element={<News setProgress={setProgress} pageSize={pageSize} key="science" country={country} category={'science'} apiKey={apiKey} />} />
              <Route exact path="/sports" element={<News setProgress={setProgress} pageSize={pageSize} key="sports" country={country} category={'sports'} apiKey={apiKey} />} />
              <Route exact path="/technology" element={<News setProgress={setProgress} pageSize={pageSize} key="technology" country={country} category={'technology'} apiKey={apiKey} />} />
            </Routes>
          </Router>
        {/* </div> */}
      </>
    )
}

export default App;

