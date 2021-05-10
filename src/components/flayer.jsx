import React from 'react';
import { Grid, makeStyles, Button } from '@material-ui/core';

const estilos = makeStyles(theme => ({
    flayer: {
        [theme.breakpoints.up('md')]: {
            paddingTop: '80px',
        },
        paddingLeft: '15px'
    },
    titulo: {
        [theme.breakpoints.up('xs')]: {
            fontSize: '20px'
        }
    },
    boton: {
        margin: '10px',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            width: '100%',
            marginLeft: '0px',
        }
    }
}));

export default function Flayer() {

    const classes = estilos();

    return (
        <div>

            <Grid container>
                <Grid item sm={6}  >
                    <img src="https://image.freepik.com/vector-gratis/desarrollo-web-ingenieria-programadores-sitio-web-codificacion-pantallas-interfaz-realidad-aumentada-desarrollador-ingeniero-proyectos-software-programacion-o-diseno-aplicaciones-ilustracion-dibujos-animados_107791-3863.jpg" alt="flayer" width="100%" />
                </Grid>
                <Grid item sm={6} className={classes.flayer}>
                    <h1 className={classes.texto}>Los mejores en marketing digital</h1>
                    <p >GudDesign hará que su producto luzca moderno y profesional mientras le ahorra tiempo.</p>

                    <Button variant="contained" color="secondary" className={classes.boton}>
                        Contactar
                    </Button>

                    <Button variant="outlined" color="secondary" className={classes.boton}>
                        Mas info
                    </Button>
                </Grid>
            </Grid>


        </div>


    )
}