import React, {useState} from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API
  // state = {
  //   progress: 0
  // }

  const [progress, setProgress] = useState(0)
  // setProgress = (progress) => {
  //   this.setState({progress: progress})
  // }
    return (
      <Router>
      <div>  
      <Navbar />
      <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
      />
      <Routes>
          <Route exact path="/" element={<News changeProgress = {setProgress} apiKey={apiKey} key ="general" pageSize={pageSize} country='in' category='general'/>} />
          <Route exact path="/business" element={<News changeProgress = {setProgress} apiKey={apiKey} key ="business" pageSize={pageSize} country='in' category='business'/>} />
          <Route exact path="/entertainment" element={<News changeProgress = {setProgress} apiKey={apiKey} key ="entertainment" pageSize={pageSize} country='in' category='entertainment'/>} />
          <Route exact path="/general" element={<News changeProgress = {setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general'/>} />
          <Route exact path="/health" element={<News changeProgress = {setProgress} apiKey={apiKey} key ="health" pageSize={pageSize} country='in' category='health'/>} />
          <Route exact path="/science" element={<News changeProgress = {setProgress} apiKey={apiKey} key ="science" pageSize={pageSize} country='in' category='science'/>} />
          <Route exact path="/sports" element={<News changeProgress = {setProgress} apiKey={apiKey} key ="sport" pageSize={pageSize} country='in' category='sport'/>} />
          <Route exact path="/technology" element={<News changeProgress = {setProgress} apiKey={apiKey} key ="technology" pageSize={pageSize} country='in' category='technology'/>} />
        </Routes>
      </div>
      </Router>
    
    )
}
export default App;

