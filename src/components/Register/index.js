import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RegisterImage from './../../images/CatChau-18.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import { ReactComponent as GoogleLogo } from './google-logo.svg';

import Checkbox from '@material-ui/core/Checkbox';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

const RegisterPage = ({ classes }) => {
  const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      background: 'linear-gradient(45deg, #e6e6e6 30%, #f2f2f2 90%)',
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);
  // const useStyles = makeStyles(theme => ({
  //   googleButton: {
  //     background: 'gray',
  //     color: 'rgb(0, 94, 166)',
  //     borderRadius: '4px',
  //     maxWidth: '65px',
  //     border: '2px solid rgb(2, 122, 197)',
  //     textTransform: 'none',
  //     boxShadow: 'none',
  //     padding: '0.3em 1em',
  //     [theme.breakpoints.down('sm')]: {
  //       width: '80%',
  //     },
  //     '&:hover': {
  //       background: 'white',
  //       boxShadow: 'none',
  //     },
  //   },
  // }));
  return (
    <div className={classes.container}>
      <div className={classes.leftContainer}>
        <h1>The Hub</h1>
        <img alt="Register" className={classes.image} src={RegisterImage} />
      </div>
      <form className={classes.form} noValidate autoComplete="off">
        <Typography style={{ color: '#878787', marginBottom: '20px' }} align="right" variant="subtitle">
          Already a member?{' '}
          <span>
            <a href="/login">Sign In</a>
          </span>
        </Typography>
        <div className={classes.createAccount}>
          <Typography align="left" variant="h5">
            Create your account
          </Typography>
          <Typography align="left" variant="subtitle">
            Start building experiences
          </Typography>
        </div>

        <div className={classes.inputName}>
          <FormControl className={classes.margin}>
            <InputLabel className={classes.formInput} shrink htmlFor="bootstrap-input">
              NAME
            </InputLabel>
            <BootstrapInput id="bootstrap-input" />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel className={classes.formInput} shrink htmlFor="bootstrap-input">
              SURNAME
            </InputLabel>
            <BootstrapInput id="bootstrap-input" />
          </FormControl>
        </div>
        <FormControl className={classes.margin}>
          <InputLabel className={classes.formInput} shrink htmlFor="bootstrap-input">
            E-MAIL ADDRESS
          </InputLabel>
          <BootstrapInput id="bootstrap-input" />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel className={classes.formInput} shrink htmlFor="bootstrap-input">
            PASSWORD
          </InputLabel>
          <BootstrapInput defaultValue="" id="bootstrap-input" />
        </FormControl>
        <FormControlLabel control={<Checkbox />} label="I've read and accepted Terms of Service and Privacy Policy" />
        <Button variant="contained" color="primary" type="submit">
          Create an account
        </Button>
        <div style={{ margin: '20px 0' }}>
          <h5 className={classes.horizontalText}>
            <span style={{ background: '#fafafafa', padding: '0 20px ', color: '#c1c1c1' }}>OR</span>
          </h5>
        </div>
        <div className={classes.btnWrap}>
          <Button
            style={{ marginBottom: '10px' }}
            variant="contained"
            className={classes.googleButton}
            startIcon={<GoogleLogo />}
          >
            Sign in with Google
          </Button>
          <Button style={{ marginBottom: '10px' }} variant="contained" className={classes.googleButton}>
            <FacebookIcon />
            Sign in with Facebook
          </Button>
          <Button style={{ marginBottom: '10px' }} variant="contained" className={classes.googleButton}>
            <TwitterIcon style={{ margin: '0 10px 5px 0' }} />
            Sign in with Twitter
          </Button>
          <Button style={{ marginBottom: '10px' }} variant="contained" className={classes.googleButton}>
            <GitHubIcon style={{ margin: '0 10px 5px 0' }} />
            Sign in with GitHub
          </Button>
        </div>
      </form>
    </div>
  );
};
const styles = ({ palette, breakpoints, spacing, typography }) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    height: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '50px',
  },
  leftContainer: {
    margin: '50px',
    width: '40%',
    borderRadius: '20px',
  },
  inputName: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  inputText: {
    marginBottom: '10px',
  },
  image: {
    width: '100%',
  },
  horizontalText: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #c1c1c1',
    lineHeight: '0.1em',
    margin: '10px 0 20px',
  },
  formInput: {
    color: '#878787',
  },
  formInputFiled: {
    backgroundColor: '#c1c1c1',
  },
  createAccount: {
    fontWeight: 900,
    marginBottom: '10px',
  },
  btnWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '450px',
    height: 'auto',
    justifyContent: 'space-between',
  },
});

export default withStyles(styles)(RegisterPage);
