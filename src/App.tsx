import { HashRouter } from 'react-router-dom';

import { Route, Switch } from 'react-router-dom';

// Route imports
import Home from './routes/Home';
import Data from './routes/Data';
import Book from './routes/Book';
import About from './routes/About';
import NotFound from './routes/_404';

function App() {
  return (
    <HashRouter>
      <Switch>
        {/* Routes */}
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/data' component={Data} />
        <Route exact path='/book' component={Book} />
        <Route path='*' component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
