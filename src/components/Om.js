import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from './images/maurice_portrait.jpg';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
  	backgroundImage: `url(${Image})`,
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover", /* Resize the background image to cover the entire container */
    flexGrow: 1,
    padding: 0,
    height: "100%",
    position: "relative",
  },
  text: {
    background: "transparent",
    color: 'white',
    boxShadow: 'none',
    padding: "10px 0 70px",
    textAlign: "justify",
  },
  background: {
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.5,
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  grid: {
    zIndex: 2
  },
  headline: {
    textAlign: "left",
    background: "transparent",
    boxShadow: 'none',
    color: 'white',
  },
});

class Om extends React.Component {
  
  render() {
    const { classes } = this.props;  
    return (
      <Grid container className={classes.root}>
        <div className={classes.background}></div>
        <Grid container justify="space-evenly" alignItems="center" direction="column" className={classes.grid}>
          
          <Grid item>
            <Grid container direction="row" justify="center">
              <Grid item xs={4}>
                <Typography variant="body1" className={classes.text}>
                  Máurice er en DJ og produsent fra Østlandet. Han startet med DJing i en alder av 16 år og produsering året etter. I 2016 fullførte han en bachelorgrad i Musikkteknologi ved NTNU. Máurice har opprinnelig sine røtter i house, men har en sterk lidenskap for all musikk, noe som kan høres både i hans DJ-sett og produksjoner. Han har spilt rundt i hele Norge og har blant annet hatt gjestemiks på radioprogrammet Pils & Plater.
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <iframe title="Soundcloud Player" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/55779923&color=%233e3c40&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Om.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Om);
