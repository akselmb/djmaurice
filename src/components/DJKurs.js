import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
  	backgroundColor: 'black',
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
  }
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
const my_script = new_script("//d16s6o6uu491xt.cloudfront.net/sales-3/loader.embed.production.js");

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
        <Grid container justify="space-evenly" direction="column">
          <Grid item>
            <Typography className={classes.headline} variant="h2">
              DJ-KURS
            </Typography> 
          </Grid>
          <Grid item >
            <Grid container direction="row" justify="center">
              <Grid item xs={4}>
                <Typography className={classes.text} variant="body1">
                  Har du lyst til å begynne å jobbe som profesjonell DJ? 
                  Da er dette kurset for deg!

                  
                </Typography> 
              </Grid>
              <Grid item xs={4}>
                <Paper>
                  I dette kurset vil vi gå gjennom alt du trenger for å begynne som DJ. Vi kommer blant annet til å gå igjennom:
                  hva en DJ gjør, håndtering av utstyr, mikse-teknikker, analyse av publikum, hvordan få spillejobber samt noen tips og triks. 
                  Du trenger ikke å ta med deg noe. NB: Kun seks plasser!
                </Paper>
              </Grid>
            </Grid>
          </Grid>
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
