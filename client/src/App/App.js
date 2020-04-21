import React from 'react';
import { useGlobal, setGlobal } from 'reactn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import InteractiveGraph from './pages/InteractiveGraph/InteractiveGraph';
import WeSpokeToGraph from './pages/WeSpokeToGraph/WeSpokeToGraph'

// import SignInView from './pages/SingInView/SignInView'
// import SurveyView from './pages/SurveyView/SurveyView'
import './App.scss';

setGlobal({
  userIsAuth: !!localStorage.getItem('delta-survey'),
});

const App = () => {
  const [userIsAuth] = useGlobal('userIsAuth');

  return (
    <div className="App">
      <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/interactive">Interactive Graph</Link>
            </li>
            <li>
              <Link to="/wespoketo">We spoke to charts</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/interactive">
            <InteractiveGraph />
          </Route>
          <Route path="/wespoketo">
            <WeSpokeToGraph />
          </Route>
        </Switch>
      </div>
    </Router>
      {/* {userIsAuth ?  <SurveyView /> : <SignInView />} */}
    </div>
  );
}

export default App;