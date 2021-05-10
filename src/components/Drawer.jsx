import React from 'react';
import { makeStyles, Drawer, Divider } from '@material-ui/core';
import Lista from './Listas'

const anchoDrawer = 240;

const estilos = makeStyles(theme => ({
    // drawer: {
    //     // [theme.breakpoints.up('md')]: {
    //     //     width: anchoDrawer,
    //     //     flexShrink: 0
    //     // }
    //     width: anchoDrawer,
    //         flexShrink: 0
    // },
    drawerPaper: {
        width: anchoDrawer
    },
    toolbar: theme.mixins.toolbar,
}))

export default function Cajon(props) {

    const classes = estilos()

    return (
        <>
            <Drawer
                anchor="left"
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper
                }}
                variant={props.variant}
                open={props.open}
                onClose={props.onClose ? props.onClose : null}
            >
                <div className={classes.toolbar}></div>
                <Divider />
                <Lista />
            </Drawer>
        </>
    )
}