import React, { Component } from 'react'
import Link from 'react-router-dom/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/search">Search</Button>
                        <Button color="inherit" component={Link} to="/results">Results</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar
