import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from './images/background3.jpg';

const styles = theme => ({
  root: {
  	backgroundImage: `url(${Image})`,
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover", /* Resize the background image to cover the entire container */
    flexGrow: 1,
    padding: 0,
    height: "100%",
  },
  headline: {
    textAlign: "center",
    background: "transparent",
    boxShadow: 'none',
    color: 'white',
  },
  text: {
    textAlign: "left",
    background: "transparent",
    boxShadow: 'none',
    color: 'white',
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
});

function new_script(src) {
  return new Promise(function(resolve, reject){
    const script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', function () {
      resolve();
    });
    script.addEventListener('error', function (e) {
      reject(e);
    });
    document.body.appendChild(script);
  })
};

// Promise Interface can ensure load the script only once.
new_script("//d16s6o6uu491xt.cloudfront.net/sales-3/loader.embed.production.js");

class DJKurs extends React.Component {  
  render() {
    const renderReady = (cb) => { 
      if (window.HooplaSalesPage) { 
        cb(); 
      } else { 
        setTimeout(() => { renderReady(cb) }, 10); 
      }}

    renderReady((() => {
      window.HooplaSalesPage.render({ organizationId: "1892312559" }, '#hoopla');
    }));

    const { classes } = this.props; 
    return (
      <Grid container className={classes.root}>
        <div className={classes.background}></div>
        <Grid container justify="space-evenly" direction="column" className={classes.grid}>
          <Grid item>
            <Grid container direction="row" justify="center">
              <Grid item xs={8}>
                <div id="hoopla"></div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

DJKurs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DJKurs);
