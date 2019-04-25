import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import red from '@material-ui/core/colors/red';
import axios from 'axios';

const styles = theme => ({
  root: {
  	backgroundColor: "black",
=======
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Grey from '@material-ui/core/colors/grey';
import axios from 'axios';

const grey = Grey[400];

const styles = theme => ({
  root: {
  	backgroundColor: grey,
>>>>>>> 335cfa7da92069efd9b9053aabbe7061f4392148
    flexGrow: 1,
    padding: 0,
    height: "100%",
    position: "relative",
<<<<<<< HEAD
    color: "white"
=======
>>>>>>> 335cfa7da92069efd9b9053aabbe7061f4392148
  },
  text: {
    textAlign: "center",
    background: "transparent",
    boxShadow: 'none',
    color: 'black',
    variant: "h2",
    padding: "70px 0 70px"
  },
  headline: {
    textAlign: "center",
    background: "transparent",
    boxShadow: 'none',
    color: 'white',
  },
  messageName: {
<<<<<<< HEAD
    textColor: "white"
=======

>>>>>>> 335cfa7da92069efd9b9053aabbe7061f4392148
  },
  messageEmail: {

  },
  messageInput: {

  },
<<<<<<< HEAD
  sendButton: {
    color: "black",
    background: "white",
    marginLeft: "auto",
    display: "block",
    ':hover': {
      background: "white"
    }
  },
  multilineColor: {
    color:'white'
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#f44336 !important"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: red
  },
  typography: { useNextVariants: true },
=======
>>>>>>> 335cfa7da92069efd9b9053aabbe7061f4392148
});

class Kontakt extends React.Component {
  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message'
  }

  formSubmit = (e) => {
    e.preventDefault()

    this.setState({
        buttonText: '...sending'
    })

    let data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
    }
    
    axios.post('API_URI', data)
    .then( res => {
        this.setState({ sent: true }, this.resetForm())
    })
    .catch( () => {
      console.log('Message not sent')
    })
  }

  resetForm = () => {
    this.setState({
        name: '',
        message: '',
        email: '',
        buttonText: 'Message Sent'
    })
  }

  render() {
    const { classes } = this.props;  
    return (
      <Grid container className={classes.root}>
<<<<<<< HEAD
          <Grid container direction="column" justify="center">
=======
          <Grid spacing={32} container direction="column" justify="center" alignItems="center">
>>>>>>> 335cfa7da92069efd9b9053aabbe7061f4392148
            <Grid item>
              <Typography className={classes.headline} variant="h2">
                KONTAKT
              </Typography> 
            </Grid>
            <Grid item>
<<<<<<< HEAD
              <Grid container direction="row" justify="center">
                <Grid item xs={6}>
                  <MuiThemeProvider theme={theme}>
                  <TextField
                    required
                    id="name"
                    label="Name"
                    className={classes.messageName}
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value})}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                        input: classes.multilineColor
                      }
                    }}
                  />
                  </MuiThemeProvider>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" justify="center">
                <Grid item xs={6}>
                  <TextField
                    required
                    id="email"
                    label="Email"
                    className={classes.messageEmail}
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value})}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" justify="center">
                <Grid item xs={6}>  
                  <TextField
                    id="message"
                    label="Message"
                    multiline
                    rows="8"
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value})}
                    className={classes.messageInput}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" justify="center">
                <Grid item xs={6}>
                  <Button type="submit" className={classes.sendButton} onSubmit={ (e) => this.formSubmit(e)}>{ this.state.buttonText }</Button>
                </Grid>
              </Grid>
=======
              <TextField
                required
                id="name"
                label="Name"
                className={classes.messageName}
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value})}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="email"
                label="Email"
                className={classes.messageEmail}
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value})}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                id="message"
                label="Message"
                multiline
                rows="8"
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value})}
                className={classes.messageInput}
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item>
              <Button type="submit" className="sendButton" onSubmit={ (e) => this.formSubmit(e)}>{ this.state.buttonText }</Button>
>>>>>>> 335cfa7da92069efd9b9053aabbe7061f4392148
            </Grid>
          </Grid>
      </Grid>
    );
  }
}

Kontakt.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Kontakt);
