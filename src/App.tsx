import { HashRouter } from 'react-router-dom';

import { Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import Data from './routes/Data';
import Book from './routes/Book';
import About from './routes/About';
import 'bootstrap/dist/css/bootstrap.min.css';

import NotFound from './routes/_404'

function App() {
  return (
    //  <div className="">
    //     Hello World
    //  </div>
    // <Navbar/>

    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/data' component={Data} />
        <Route exact path='/book' component={Book} />
        <Route path="*" component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
