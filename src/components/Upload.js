import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme, fade, withStyles} from '@material-ui/core/styles';
import Problem from '../components/Problem';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles ={
    solution: {
        textAlign: 'center'
    },
    card: {
        display: 'flex'
    },
    add: {
        width: '50px',
        height: '50px',
        textAlign: 'right'
    },
    button: {
        margin: 'auto auto auto 92%'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        border: '2px solid #000',
 
      },
      problem: {
        height: '100px'
      },
      solution: {
        height: '290px'
      },
      notes: {
        height: '60px',
        margin: 'auto auto 30px auto'
      }
}

const INITIAL_STATE = {
    email: '',
    solution: '',
    notes: '',
    error: null,
  };

export class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }
    
    onSubmit = event => {
        const { problem, solution, notes } = this.state;

       /* this.props.firebase
            .doSignInWithEmailAndPassword(email, solution)
            .then(() => {
            this.setState({ ...INITIAL_STATE });
           // this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
            this.setState({ error });
            });*/

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { problem, solution, notes, error } = this.state;
        const { classes } = this.props;
        const isInvalid = solution === '' || problem === '';

        return (
            <form onSubmit={this.onSubmit}>
            <Card>
            <CardContent>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="standard-multiline-static"
                    label="Problem"
                    multiline
                    rows="3"
                    className={classes.problem}
                    autoComplete="problem"
                    autoFocus
                    name="problem"
                    value={problem}
                    onChange={this.onChange}
                    type="text"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="solution"
                    label="Solution"
                    multiline
                    rows="12"
                    className={classes.solution}
                    autoComplete="solution"
                    autoFocus
                    name="solution"
                    value={solution}
                    onChange={this.onChange}
                    type="text"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="notes"
                    label="Notes"
                    multiline
                    rows="2"
                    className={classes.notes}
                    autoComplete="notes"
                    autoFocus
                    name="notes"
                    value={notes}
                    onChange={this.onChange}
                    type="text"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isInvalid}
                >
                    Upload
                </Button>
                </CardContent>
                </Card>
                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

export default withStyles(styles)(Upload);
