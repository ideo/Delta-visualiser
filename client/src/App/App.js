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
import WeSpokeToGraph1 from './pages/WeSpokeToGraph1/WeSpokeToGraph'
import WeSpokeToGraph2 from './pages/WeSpokeToGraph2/WeSpokeToGraph'
import WeSpokeToGraph3 from './pages/WeSpokeToGraph3/WeSpokeToGraph'

// import SignInView from './pages/SingInView/SignInView'
// import SurveyView from './pages/SurveyView/SurveyView'
import './App.scss';
import BiggestConcerns from './pages/BiggestConcerns/BiggestConcerns';
import WorkingWell from './pages/WorkingWell/WorkingWell';

setGlobal({
  userIsAuth: !!localStorage.getItem('delta-survey'),
});

const App = () => {
  const [userIsAuth] = useGlobal('userIsAuth');

  return (
    <div className="App">
      <Router>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/interactive">
            <InteractiveGraph />
          </Route>
          <Route path="/wespoketo1">
            <WeSpokeToGraph1 />
          </Route>
          <Route path="/wespoketo2">
            <WeSpokeToGraph2 />
          </Route>
          <Route path="/wespoketo3">
            <WeSpokeToGraph3 />
          </Route>
          <Route path="/concerns">
            <BiggestConcerns />
          </Route>
          <Route path="/workingwell">
            <WorkingWell />
          </Route>
        </Switch>
      </div>
    </Router>
      {/* {userIsAuth ?  <SurveyView /> : <SignInView />} */}
    </div>
  );
}

export default App;