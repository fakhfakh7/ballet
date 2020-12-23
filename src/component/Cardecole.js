import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 240,
        background: 'none',
        margin: '10px',
        maxHeight: 500,
            //background: 'rgba(0,0,0,0.5)',


      
        

    },

    media: {

    },

    large: {
        height: 150,
        width: 150,
        margin: 'auto',
    },
    titel: {
        fontSize: "0.9rem",
        fontWeight: "bold",
        fontFamily: "Nunito",
        color: "#FF1493"


    },
    titell: {
        fontSize: "0.80rem",
        //fontWeight: "bold",
       // <Typography variant="body2" color="primary" component="p" className={classes.titell}>
                     //   {information.description}
                  //  </Typography>


        fontFamily: "Nunito",
        color: "white",


    },
    titelle: {
        fontSize: "0.80rem",
        fontWeight: "bold",


        fontFamily: "Nunito",
        color: "white"


    }
}))
function Cardecole({ information }) {
    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardActionArea>
                <Avatar alt='img1' src={information.imgsrc} className={classes.large} />


                <CardContent className={classes.root}>
                    <Typography gutterBottom variant="h6" component="h6" className={classes.titel}>
                        {information.titre}
                    </Typography>
                    <Typography variant="body2" color="primary" component="p" className={classes.titelle}>
                        {information.duree}
                    </Typography>
                    <br />
                    
                </CardContent>
            </CardActionArea>
        </Card>


    );
}

export default Cardecole;
