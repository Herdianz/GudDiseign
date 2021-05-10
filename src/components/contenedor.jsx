import React from 'react';

import { makeStyles, Hidden } from '@material-ui/core';
import Navbar from './navbar';
import Cajon from './Drawer';
import Contenido from './box';
import Flayer from './flayer';
import Footer from './Footer';

const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
    }
}));

export default function Contenedor() {

    const classes = estilos();
    const [abrir, setAbrir] = React.useState(false);

    const handleCloseDrawer = () => {
        setAbrir(!abrir);
    }

    return (
        <div className={classes.root}>
            <Navbar handleCloseDrawer={handleCloseDrawer} />
            <Hidden mdUp>
                <Cajon
                    variant="temporary"
                    open={abrir}
                    onClose={handleCloseDrawer}
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <Flayer />
                <div className={classes.toolbar}></div>
                <Contenido />
                <Footer />
            </div>

        </div>
    )
}