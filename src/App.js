import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';

import home from './pages/home';
import results from './pages/results';
import searchClass from './pages/searchClass';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#33c9dc',
    main: '#00bcd4',
    dark: '#008394',
    contrastText: '#fff'
  },
  secondary: {
    light: '#ff633',
    main: '#ff3d00',
    dark: '#b22a00',
    contrastText: '#fff'
  }
}
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  );
}

export default App;
