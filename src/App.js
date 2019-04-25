import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Om from './components/Om';
import DJKurs from './components/DJKurs';
import Kontakt from './components/Kontakt';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		height: "100%",
		flexGrow: 1,
		position: 'absolute'			
	}
});

class App extends Component {
  render() {
  	const { classes } = this.props;	 
    return (
      <div className={classes.root}>
      	<Nav />
        <Header />
        <Om />
        <DJKurs />
        <Kontakt />
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);