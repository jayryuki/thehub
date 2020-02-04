import React, { Component } from 'react'
import Link from 'react-router-dom/Link';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';

export class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <ToolBar>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/search">Search</Button>
                        <Button color="inherit" component={Link} to="/results">Results</Button>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar
