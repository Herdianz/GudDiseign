import { AppBar, makeStyles, Toolbar, Typography, IconButton, Button, Hidden } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    title: {
        flexGrow: 1
    }
    // appBar: {
    //     [theme.breakpoints.up('sm')]: {
    //         width: `calc(100% - ${240}px)`,
    //         marginLeft: 240
    //     }
    // }
}));

export default function Navbar(props) {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" color="primary" >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        className={classes.menuButton}
                        onClick={() => props.handleCloseDrawer()}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        GudDesign
                    </Typography>
                    <Hidden smDown>
                        <Button color="inherit">
                            Servicios
                        </Button>
                        <Button color="inherit">
                            Clientes
                        </Button>
                        <Button color="inherit">
                            Contactos
                        </Button>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </>
    )
}