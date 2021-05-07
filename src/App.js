import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import Admin_Dash from './pages/Admin_Dash';
import Adm_post from './pages/Adm_post';
import Adm_Message from './pages/Adm_Message';
import Adm_Team from './pages/Adm_Team';
import Adm_Report from './pages/Adm_Report';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
        <Route path='/dashboard' exact component={Admin_Dash} />
        <Route path='/post' exact component={Adm_post} />
        <Route path='/messages' exact component={Adm_Message} />
        <Route path='/team' exact component={Adm_Team} />
        <Route path='/reports' exact component={Adm_Report} />
    </Switch>
      </Router>
    </>
  );
}
export default App;
