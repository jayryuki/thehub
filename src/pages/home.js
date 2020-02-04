import React, { Component } from 'react'

import axios from 'axios';
import Grid from '@material-ui/core/Grid';

export class home extends Component {
    componentDidMount(){

    }
    render() {
        return (
            <Grid container>
                <Grid item sm={8} xs={12}>
                <p> content </p>
                </Grid>
            </Grid>
        )
    }
}

export default home
