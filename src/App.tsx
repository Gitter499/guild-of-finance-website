import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {



  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route exactpath="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/author" component={Author}/>
          <Route path="/book" component={Book}/>
           */}

           // TODO: Setup Routing Components 

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
