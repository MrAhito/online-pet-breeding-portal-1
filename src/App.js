import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
        <Switch>
        </Switch>
        <Switch>
          // <Route path='/dashboard' exact component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
