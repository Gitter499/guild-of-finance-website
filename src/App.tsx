import React from 'react';
import './App.css';
import Navbar from './components/navbar/NavbarReusable'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './routes/Home'
import Author from './routes/Author'
import Book from './routes/Book'
import About from './routes/About'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  let def = "guild-of-finance-website"

  return (
      //  <div className="">
      //     Hello World
      //  </div>
    // <Navbar/>
    

    <Router>
  
        <Switch>
          <Route exact path={`${def}/`} component={Home}/>
          <Route path={`${def}/about`} component={About}/>
          <Route path={`${def}/author`} component={Author}/>
          <Route path={`${def}/book`} component={Book}/>
          {/* <Route path="*" component={404} /> */}
          

        </Switch>

     </Router>
  )
}

export default App;
