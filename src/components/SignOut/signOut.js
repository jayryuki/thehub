import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core' 
import blue from '@material-ui/core/colors/blue'


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

const SignOutButton = ({ firebase }) => (
  <MuiThemeProvider theme={theme}>
  <Button color="inherit" onClick={firebase.doSignOut} component={Link} to="/signin" >
    Sign Out
  </Button>
  </MuiThemeProvider>
);

export default withFirebase(SignOutButton);