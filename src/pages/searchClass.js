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
import Upload from '../components/Upload';

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
}

export class searchClass extends Component {

    state = {
        open: false
    }
    
    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <Grid container textAlign="left">
                <Grid item xs={3}/>
                <Grid item xs={6} className={classes.solution}>
                <Typography variant="h3"> Class Name</Typography>
                    <Problem/>
                    <Problem/>
                    <Problem/>
                    <IconButton color="primary" size="medium" className={classes.button}>
                         <AddCircleIcon className={classes.add} onClick={this.handleToggle}/>
                    </IconButton>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={this.handleToggle}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <Upload/>
                        </Fade>
                    </Modal>
                </Grid>

                <Grid item xs={3}/>
            </Grid>
        )
    }
}

export default withStyles(styles)(searchClass);
