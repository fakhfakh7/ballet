import { Typography } from '@material-ui/core';
import React from 'react';
import Ballet from "../Vedio/Balletmp4.mp4";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    contenu: {
        fontSize: "1rem",
        fontFamily: "Nunito",
        color: "white",
        paddingLeft: "40px",
        marginTop: '10%',
        fontWeight: "bold",



    },
    spanstyle: {
        color: '#FF1493',
    }

}));


function Home() {
    const classes = useStyles();

    return (
        <div>
            <video autoPlay loop
                style={{
                    position: "fixed",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}>

                <source src={Ballet} type="video/mp4">
                </source>


            </video>
            <div>
                <Typography variant="h6" align="left" component="p" className={classes.contenu} >
                    <span className={classes.spanstyle}>Le ballet </span>est un genre dramatique dont l'action est figurée par des pantomimes et des danses.<br /> Ses origines remontent à la Renaissance italienne (XVe siècle). Primitivement développé à la cour d'Italie,<br /><span className={classes.spanstyle}>le ballet </span> a reçu ses lettres de noblesse en France, puis en Russie, en tant que danse-spectacle.
                    Au XVIIe siècle,<br /> le développement important qu'a connu le ballet à la cour de Louis XIV explique l'origine française de la plupart<br /> des termes de vocabulaire de la danse.

                    Étymologiquement, le mot vient de l'italien ballo (danser) dont le diminutif<br /> balletto a donné le mot «<span className={classes.spanstyle}> ballet</span> ».

                    Selon les époques, les pays et les courants, le spectacle chorégraphique peut intégrer<br /> de la musique, du chant, du texte, des décors, voire des machineries.

              </Typography>
              
    

            </div>
            





        </div>
    );
}
export default Home; 


 
