import React, { Component } from 'react'

import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, useTheme, fade, withStyles} from '@material-ui/core/styles';
import StudyIcon from '../images/study.png';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { logicalExpression } from '@babel/types';
import TextField from '@material-ui/core/TextField';

const styles = {
    search: {
        display: 'flex'
    },
    description: {
        margin: 'auto auto 20px auto'
    },
    image: {
        margin: '150px auto auto auto'
    }
}

 class home extends Component {

    
    render() {
        const { classes } = this.props;
        return (
            <Grid container textAlign="center">
                <Grid item sm/>
                <Grid item sm>
                <img src={StudyIcon} alt="logo" height="100px" width="100px" className={classes.image}/>
                <Typography variant="h5" className={classes.description}> Welcome to The Hub, search for your class to begin learning! :) </Typography>
                
                <form className={classes.search} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Enter Class Name:" variant="outlined" fullWidth/>
                </form>

                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

home.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(home);
