import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Cardecole from './Cardecole';
import Information from '../static/InforEco';
import Ballet from "../Vedio/Dance.mp4";
import Grid from '@material-ui/core/Grid';





const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/ballet1.jpg'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: "100%",
        position: "absolute",
        left: "50%",
        top: "50%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1"




    },
    cardd: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        paddingLeft: "50px",




    },
    titre: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        fontFamily: "Nunito",
        color: "#AFEEEE",
        marginTop: "12%",
        paddingLeft: "7%"

    }
}));
function Ecole() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="row" >
                <Grid container direction="column" xs={6} justify="center" alignItems="center"  >

                    <Typography align='left' className={classes.titre}>
                        Nos cours <p />
                        <p/>


                    </Typography>
                    <br/>
                    


                    <div className={classes.cardd}>
                        <Cardecole information={Information[0]} />
                        <Cardecole information={Information[1]} />
                        <Cardecole information={Information[2]} />
                    </div>

                </Grid>

                <Grid container xs={6} >

                    <video autoPlay loop controls
                        style={{
                            position: "absolute",
                            width: "48%",
                            left: "74%",
                            top: "40%",
                            height: "48%",
                            transform: "translate(-50%, -50%)",
                            zIndex: "-1"
                        }}>
                        <source src={Ballet} type="video/mp4">
                        </source>
                    </video>
                </Grid>
            </Grid>

        </div>
    )
}

export default Ecole;
