import React, { Component } from 'react'
import Link from 'react-router-dom/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import StudyIcon from '../images/study.png';
import { makeStyles, useTheme, fade, withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const styles = {
    name: {
        margin: 'auto auto auto auto'
    }
}

export class NavBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/search">Search</Button>
                        <Button color="inherit" component={Link} to="/results">Results</Button>
                        <Typography variant="h5" className={classes.name}>      
                            
                        </Typography>
                        <img src={StudyIcon} alt="logo" height="50px" width="50px" />
                        <Typography variant="h5" >      
                            <Box fontWeight="fontWeightBold" m={1}>
                                 The Hub
                            </Box>   
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(NavBar);
