import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp/signUp';
import { withFirebase } from '../Firebase';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core' 
import blue from '@material-ui/core/colors/blue'


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    align: 'center',

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

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

const SignInPage = () => (
  
  <Container component="main" maxWidth="xs">
    <CssBaseline />
      <div align="center">
        <Avatar className={useStyles.avatar} color="primary" align="center">
            <LockOutlinedIcon />
        </Avatar>
      </div>
        <Typography component="h1" variant="h5" align="center">
            Sign in
        </Typography>
        <SignInForm />
        <Grid container align="left">
            <Grid item xs align="left">
            </Grid>
            <Grid item>
                <SignUpLink />
            </Grid>
          </Grid>
        
        
 
  </Container>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/home');
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
              <MuiThemeProvider theme={theme}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"

            autoComplete="email"
            autoFocus
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
        />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"

            autoComplete="password"
            autoFocus
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
        />

        {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
        /> */}
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isInvalid}
          >
            Sign In
        </Button>
        </MuiThemeProvider>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };