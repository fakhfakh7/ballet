import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer:{
        backgroundColor:theme.palette.common.white , width:"100%",height:"6%",
       // marginTop:"21%",
       // marginBottom:"0%",
        position:"fixed",

    },

}));
function Footer() {
    const classes = useStyles();

    return (
        
            <footer className={classes.footer}>hhhhhhhhhhhh foter</footer>
        
    )
}

export default Footer;
