import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Adm_post from './components/Adm_post';
import Admin_Dash from './components/Admin_Dash';
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
                <Route path='/messages' exact component={Dashboard} />
        </Switch>
        <Switch>
                <Route path='/team' exact component={Dashboard} />
        </Switch>
        <Switch>
                <Route path='/reports' exact component={Dashboard} />
        </Switch>
    </Router>
    </>
  );
}
export default App;
