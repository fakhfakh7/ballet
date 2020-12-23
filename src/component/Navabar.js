import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Ecole from './Ecole';
import Danceur from './Danceur';
import Home from './Home';

const useStyles = makeStyles((theme) => ({
  root: {

    flexGrow: 1,
  },
  Colore: {
    background: 'rgba(0,0,0,0.5)',



  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {

    marginLeft: '50%',
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  colorText: {
    fontWeight: "bold",
    fontSize: "0.8rem",
    fontFamily: "Nunito",
  },
  Text: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    fontFamily: "Nunito",
  },
  Link: {
    color: "white",
  }

}));

function Navabar({ activeOnlyWhenExact }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>

        <AppBar position="static" className={classes.Colore}>
          <Toolbar>
            <Avatar alt="logo" src="../../images/logo2.png" className={classes.large} />
            <Typography variant="h5" className={classes.Text} >
              Ballet YAS<br></br>
              <span className={classes.colorText}>Secret De Bonheur</span>

            </Typography>
            <Typography className={classes.title}>
              <Link to='/' className={classes.Link}>
                <Button color="inherit">Home</Button>
              </Link>
              <Link to='/Ecole' className={classes.Link}>
                <Button color="inherit">Nos horaires du cours</Button>
              </Link>
              <Link to='/Danceur' className={classes.Link}>
                <Button color="inherit"> Les meilleurs danseurs</Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/Ecole">
            <Ecole></Ecole>
          </Route>
          <Route exact path="/Danceur">
            <Danceur></Danceur>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}
export default Navabar;