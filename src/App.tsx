import React from 'react';
import './App.css';
import Navbar from './components/navbar/NavbarReusable'
import {HashRouter} from 'react-router-dom'
  
  
import {Route, Switch} from 'react-router-dom';

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
  
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/author" component={Author}/>
          <Route exact path="/book" component={Book}/>
          {/* <Route path="*" component={404} /> */}
          

        </Switch>

     </HashRouter>
  )
}

export default App;
