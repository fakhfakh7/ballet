import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
        background: 'none',
        margin: '10px',
        maxHeight: 300,
            //background: 'rgba(0,0,0,0.5)',
           // background: 'rgba(0,0,0,0.5)',
    },

    media: {

    },
    large: {
        height: 190,
        width: 190,
        margin: 'auto',
    },
    titel: {
        fontSize: "0.9rem",
        fontWeight: "bold",
        fontFamily: "Nunito",
        color: "white"
    },
}))
function CardDanceur({ information }) {
    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardActionArea>
                <Avatar alt='img2' src={information.imgsrc} className={classes.large} />
                <CardContent className={classes.root}>
                    <Typography gutterBottom variant="h6" component="h6" className={classes.titel}>
                        {information.titre}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>


    );
}

export default CardDanceur;
