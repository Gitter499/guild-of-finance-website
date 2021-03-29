import React from 'react';
import './App.css';
import Navbar from './components/navbar/NavbarReusable'
import {BrowserRouter as Router, Route, Switch, HashRouter} from 'react-router-dom';

import Home from './routes/Home'
import Author from './routes/Author'
import Book from './routes/Book'
import About from './routes/About'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
      //  <div className="">
      //     Hello World
      //  </div>
    // <Navbar/>
    
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/author" component={Author}/>
          <Route path="/book" component={Book}/>
          {/* <Route path="*" component={404} /> */}
          

        </Switch>
        <div className="container-app">
        {/* home component goes here*/}
        </div>
        <div className="footer">
       {/* footer component goes here*/}
       </div>

    { /* use other elements*/}
      </div>

      
    </HashRouter>
    
  )
}

export default App;
