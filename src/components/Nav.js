import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import grey from '@material-ui/core/colors/grey';
import { ReactComponent as Facebook} from './svg/facebook.svg';
import { ReactComponent as Soundcloud} from './svg/soundcloud.svg';

const white = grey[50];

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color: white,
  },
  menuIcon: {
    color: white,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  tabs: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  tab: {
  },
  logo: {
    height: "50%",
    width: "50%",
  },
  icon: {
    fill: "white",
    marginLeft: "20px",
    display: "block",
    height: "auto",
    width: "auto",
  },
});

class Nav extends Component {
  state = {
    value: 'one',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              MÁURICE
            </Typography>
            <a href="https://www.facebook.com/mauriceofficielle" target="_blank">
              <Facebook className={classes.icon} />
            </a>
            <a href="https://soundcloud.com/mauriceofficielle" target="_blank">
              <Soundcloud className={classes.icon} />
            </a>
            <div className={classes.grow}></div>
            <IconButton aria-label="Menu" className={classes.menuIcon}>
              <MenuIcon />
            </IconButton>
            <Tabs value={value} className={classes.tabs} onChange={this.handleChange}>
              <Tab className={classes.tab} label="Om" value="one" />
              <Tab className={classes.tab} label="DJ-kurs" value="two" />
              <Tab className={classes.tab} label="Kontakt" value="three" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Nav);