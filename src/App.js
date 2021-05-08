import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
        <Switch>
          <Route path='/dashboard' exact component={Dashboard} />
        </Switch>
        <Switch>
        <Route path='/admin' exact component={Admin} />
      </Switch>
      </Router>
    </>
  );
}
export default App;
