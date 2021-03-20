import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './routes/Home'
import Author from './routes/Author'
import Book from './routes/Book'
import About from './routes/About'

function App() {



  return (
      //  <div className="">
      //     Hello World
      //  </div>
    // <Navbar/>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/author" component={Author}/>
          <Route path="/book" component={Book}/>
          

        </Switch>
        <div className="container-app">
        {/* home component goes here*/}
        </div>
        <div className="footer">
       {/* footer component goes here*/}
       </div>

    { /* use other elements*/}
      </div>
    </Router>
  )
}

export default App;
