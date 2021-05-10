import React from 'react';
import { Grid, Typography, makeStyles, Collapse } from '@material-ui/core';
import { PlayCircleFilled, Instagram, Palette } from '@material-ui/icons';
import SimpleCard from './Carta';
import Cliente from './Clientes';

const estilos = makeStyles(theme => ({
    titulo: {
        padding: '20px 0px'
    },
}));
export default function Contenido() {

    const classes = estilos();

    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={4} >
                    <Typography variant="h6" align="center">
                        <Palette color="secondary" fontSize="large" />
                        <p>Diseño</p>
                    </Typography>
                    <Typography variant="body1" align="center">
                        <p>GudDesign hará que su producto luzca moderno y profesional mientras le ahorra tiempo</p>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Typography variant="h6" align="center">
                        <PlayCircleFilled color="secondary" fontSize="large" />
                        <p>Produccion</p>
                    </Typography>
                    <Typography variant="body1" align="center">
                        <p>GudDesign hará que su producto luzca moderno y profesional mientras le ahorra tiempo</p>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Typography variant="h6" align="center">
                        <Instagram color="secondary" fontSize="large" />
                        <p>Gestion RRSS</p>
                    </Typography>
                    <Typography variant="body1" align="center">
                        <p>GudDesign hará que su producto luzca moderno y profesional mientras le ahorra tiempo</p>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" align="center" >
                        <p className={classes.titulo}>  Nuestro servicio de paginas Web Incluye:</p>
                    </Typography>
                </Grid>
                <Grid item md={4} sm={12}>
                    <Collapse in={true} >
                        <SimpleCard
                            titulo="Hosting y Dominio"
                            contenido="El dominio (nombre de tu sitio web) lo puedes elegir, es importante mencionar que estará sujeto a disponibilidad; en caso de no estar disponible el dominio que quieras usar, te enviaremos varias sugerencias."
                            contenido2="Hosting (es el espacio en Internet donde se alojará tu sitio web). Esta oferta incluye el primer año de hosting completamente gratis. También puedes contratar otro servicio de hosting si lo prefieres."
                        />
                    </Collapse>
                </Grid>
                <Grid item md={4} sm={12}>
                    <SimpleCard
                        titulo="SEO Básico"
                        contenido="El SEO es un conjunto de técnicas que ayudará a que tu sitio web se posicione de forma orgánica en los buscadores."
                        contenido2="El posicionamiento SEO da resultados a mediano y largo plazo, pero es muy importante incluir el SEO desde el inicio de un sitio web."
                    />
                </Grid>
                <Grid item md={4} sm={12}>
                    <SimpleCard
                        titulo="Google Analytics"
                        contenido="Es la herramienta gratuita de Google que te permite medir lo que sucede en tu sitio web: usuarios que han visitado tu web,  ¿De dónde vienen los usuarios? ¿Qué páginas de tu web son las más vistas? y muchas métricas más."
                        contenido2="Crearemos tu cuenta de Google Analytics y también instalaremos el código de seguimiento en tu sitio web. Tendrás acceso completo a tu cuenta de Google Analytics en todo momento."
                    />
                </Grid>
                <Grid item md={4} sm={12}>
                    <SimpleCard
                        titulo="Sitio Web Responsivo"
                        contenido="Tu sitio web estará diseñado para verse bien en todos los dispositivos: ordenadores, teléfonos móviles y tablets."
                    />
                </Grid>
                <Grid item md={4} sm={12}>
                    <SimpleCard
                        titulo="Correos Electrónicos Corporativos"
                        contenido="Tendrás hasta 10 direcciones de correos electrónicos con el nombre de tu dominio; por ejemplo : info@tudominio.com."
                    />
                </Grid>
                <Grid item md={4} sm={12}>
                    <SimpleCard
                        titulo="Imágenes de tu Página Web"
                        contenido="Todas las imágenes que usaremos en tu sitio web estarán respaldadas por derecho de uso. Trabajamos con varios bancos de imágenes y te daremos la certificación que autoriza su uso. "
                    />
                </Grid>
                <Grid item sm={12} >
                    <Typography variant="h5" align="center" >
                        <p className={classes.titulo}> Clientes</p>
                    </Typography>
                </Grid>
                <Grid item sm={12}>
                    <Cliente />
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="h5" align="center" >
                        <p className={classes.titulo}>Contactos</p>
                    </Typography>
                </Grid>
            </Grid>
        </div >
    )
}