import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';

import home from './pages/home';
import results from './pages/results';
import searchClass from './pages/searchClass';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <div class="container">
        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/results" component={results}></Route>
          <Route exact path="/search" component={searchClass}></Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
