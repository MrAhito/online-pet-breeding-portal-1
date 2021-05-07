import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import Adm_post from './components/Adm_post';
import Admin_Dash from './components/Admin_Dash';
import Adm_Message from './components/Adm_Message';
import Adm_Team from './components/Adm_Team';
import Adm_Report from './components/Adm_Report';
function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch> 
        <Switch>
            <Route path='/dashboard' exact component={Admin_Dash} />
        </Switch>
        <Switch>
                <Route path='/post' exact component={Adm_post} />
        </Switch>
        <Switch>
                <Route path='/messages' exact component={Adm_Message} />
        </Switch>
        <Switch>
                <Route path='/team' exact component={Adm_Team} />
        </Switch>
        <Switch>
                <Route path='/reports' exact component={Adm_Report} />
        </Switch>
    </Router>
    </>
  );
}
export default App;
