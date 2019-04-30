import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from './images/background2.jpg';
import Grey from '@material-ui/core/colors/grey';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import IconButton from '@material-ui/core/IconButton';

const white = Grey[50];

const styles = theme => ({
  root: {
  	backgroundImage: `url(${Image})`,
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover", /* Resize the background image to cover the entire container */
    padding: 0,
    height: "100%", 
    position: "relative",
    flexGrow: 1,
  },
  headline: {
  	textAlign: "center",
  	background: "transparent",
  	boxShadow: 'none',
  	color: 'white',
    [theme.breakpoints.up('xs')]: {
      fontSize: 48,
      lineHeight: 1.5
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 72,
      lineHeight: 1
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 95,
      lineHeight: 1
    },
  },
  text: {
    textAlign: "center",
    background: "transparent",
    boxShadow: 'none',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
  },  
  underText: {
    textAlign: "center",
    background: "transparent",
    boxShadow: 'none',
    color: 'white',
    marginTop: "10%",
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
  },
  ArrowButton: {
  	color: white,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },

});

function Header(props){
    const { classes } = props;  
    return (
      <Grid container className={classes.root} >
        <Grid container justify="center" alignItems="center" direction="column" wrap='nowrap'>
          <Grid key={0} item xs={8} lg={8} />
          <Grid key={1} item xs={8} lg={10}>
            <Typography variant="h1" className={classes.headline}>
              LYST TIL Å BLI EN PROFESJONELL DJ?
            </Typography>
          </Grid>
          <Grid key={2} item xs={8} lg={8}>
            <Typography  variant="h6" className={classes.underText}>
              Book din kursplass i dag!
            </Typography>
          </Grid>
          <Grid key={3} item xs={8} lg={8}>
            <IconButton className={classes.ArrowButton} > 
              <Typography  variant="h6" className={classes.text}>
                TRYKK HER
              </Typography>
            </IconButton>
            <IconButton className={classes.ArrowButton} > 
              <KeyboardArrowDown fontSize="large"/>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
