import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Footer() {
    return (
        <AppBar color="default" position="sticky" >
            <Toolbar>
                <Typography variant="h6" align="center">
                    Footer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}