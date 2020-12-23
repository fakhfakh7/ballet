import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Ballet from "../Vedio/tamara.mp4";
import Grid from '@material-ui/core/Grid';
import Information from '../static/InfoDanse';
import CardDanceur from './CardDanceur';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/yos.png'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: "100%",
        position: "absolute",
        left: "50%",
        top: "50%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1",
        //background: 'rgba(0,0,0,0.5)',

        




    },
    titre: {
        fontSize: "2rem",
        fontWeight: "bold",
        fontFamily: "Nunito",
        color: "white",
        marginTop: "70%",
        paddingLeft: "35%"

    }

}));

function Danceur() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="row" >
                <Grid container xs={6} direction="row" >
                    <video autoPlay loop controls
                        style={{
                            position: "absolute",
                            width: "50%",
                            left: "25%",
                            top: "42%",
                            height: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: "-1"
                        }}>
                        <source src={Ballet} type="video/mp4">
                        </source>
                    </video>
                    <Typography align='center' className={classes.titre}>
                        Tamara Rojo <p />
                     


                    </Typography>
                    
                </Grid>

                <Grid container direction="column" xs={6} justify="center" alignItems="center" style={{ marginTop: "8%" }} >
                    <Grid container direction="row">
                        <Grid items xs={4} >
                            <CardDanceur information={Information[0]} />
                        </Grid>
                        <Grid items xs={4}>
                            <CardDanceur information={Information[1]} />
                        </Grid>
                        <Grid items xs={4} >
                            <CardDanceur information={Information[2]} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row">
                        <Grid items xs={4} >
                            <CardDanceur information={Information[3]} />
                        </Grid>
                        <Grid items xs={4}>
                            <CardDanceur information={Information[4]} />
                        </Grid>
                        <Grid items xs={4} >
                            <CardDanceur information={Information[5]} />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>


        </div>
    )
}

export default Danceur;
