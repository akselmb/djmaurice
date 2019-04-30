import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Pink from '@material-ui/core/colors/pink';

const red = Pink['A400'];

const styles = theme => ({
  root: {
  	backgroundColor: "black",
    flexGrow: 1,
    padding: 0,
    height: "100%",
    position: "relative",
    color: "white"
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
  grow: {
    flexGrow: 1,
  },
  messageName: {
    textColor: "white"
  },
  senderEmail: {

  },
  messageInput: {

  },
  label: {
    color: "white",
    '&$focused': {
      color: "white"
    }
  },
  focused: {},
  sendButton: {
    color: "black",
    background: "white",
    float: "right"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit, 
  },
  inputColor: {
    color:'white'
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: `${red} !important`
  }
});

class Kontakt extends React.Component {
  state = {
    name: '',
    message: '',
    senderEmail: '',
    submit: false,
    sent: false,
    buttonText: 'send'
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
        buttonText: '...sending'
    });

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env;

    this.sendFeedback(
      template,
      this.state.name,
      this.state.senderEmail,
      receiverEmail,
      this.state.message);

    this.setState({
      submit: true,
    });
  }

  sendFeedback (template, name, senderEmail, receiverEmail, message) {
    window.emailjs.send(
      'mailgun',
      template,
      {
        name,
        senderEmail,
        receiverEmail,
        message
      })
      .then(res => {
        this.setState({ sent: true });
        this.resetForm();
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Failed to send message. Error: ', err));
  }

  resetForm = () => {
    this.setState({
        name: '',
        message: '',
        senderEmail: '',
        buttonText: 'Message Sent'
    })
  }

  render() {
    const { classes } = this.props;  
    return (
      <Grid container className={classes.root}>
        <Grid container direction="column" justify="center">
          <form id="mailForm" onSubmit={this.handleSubmit}>
            
            <Grid item>
              <Grid container direction="row" justify="center">
                <Grid item xs={6}>
                  <TextField
                    autoComplete={"email"}
                    required
                    id="name"
                    label="Navn"
                    classes={{
                      root: classes.messageName,
                    }}
                    value={this.state.name}
                    onChange={ this.handleChange('name') }
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                        input: classes.inputColor,
                      }
                    }}
                    InputLabelProps ={{
                      classes: {
                        root: classes.label,
                        focused: classes.focused   
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
                    autoComplete={"email"}
                    required
                    id="senderEmail"
                    label="Email"
                    className={classes.senderEmail}
                    value={this.state.senderEmail}
                    onChange={ this.handleChange('senderEmail') }
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                        input: classes.inputColor,
                      }

                    }}
                    InputLabelProps ={{
                      classes: {
                        root: classes.label,
                        focused: classes.focused      
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
                    label="Melding"
                    multiline
                    rows="12"
                    value={this.state.message}
                    onChange={ this.handleChange('message') }
                    className={classes.messageInput}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                        input: classes.inputColor,
                      }
                    }}
                    InputLabelProps ={{
                      classes: {
                        root: classes.label,
                        focused: classes.focused   
                      }
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" justify="center">
                <Grid item xs={6} >
                  <Button variant="contained" type="submit" form="mailForm"  color="secondary" className={classes.sendButton} onSubmit={ e => this.handleSubmit(e) }>
                    { this.state.buttonText }
                    <Icon className={classes.rightIcon} size="small">send</Icon>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}

Kontakt.propTypes = {
  classes: PropTypes.object.isRequired,
  env: PropTypes.object.isRequired
};

export default withStyles(styles)(Kontakt);
