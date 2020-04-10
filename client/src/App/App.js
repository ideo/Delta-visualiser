import React from 'react';
import { useGlobal, setGlobal } from 'reactn';

import SignInView from './pages/SingInView/SignInView'
import SurveyView from './pages/SurveyView/SurveyView'
import './App.scss';

setGlobal({
  userIsAuth: !!localStorage.getItem('delta-survey'),
});

const App = () => {
  const [userIsAuth] = useGlobal('userIsAuth');

  return (
    <div className="App">
      {userIsAuth ?  <SurveyView /> : <SignInView />}
    </div>
  );
}

export default App;