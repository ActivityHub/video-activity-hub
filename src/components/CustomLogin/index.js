import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
// import AppleIcon from '@material-ui/icons/Apple';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { ReactComponent as GoogleLogo } from './google-logo.svg';
import { useAppState } from '../../state';

const CustomLogin = ({ classes }) => {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

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

  // const classes = useStyles();
  const { signIn, user, isAuthReady, facebookSignIn, twitterSignIn, gitHubSignIn } = useAppState();
  const history = useHistory();
  const location = useLocation();
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(null);

  const isAuthEnabled = Boolean(process.env.REACT_APP_SET_AUTH);

  if (user || !isAuthEnabled) {
    history.replace('/activities');
  }

  if (!isAuthReady) {
    return null;
  }

  const googleLogin = () => {
    setAuthError(null);
    if (signIn) {
      signIn(passcode)
        .then(() => {
          history.replace(location?.state?.from || { pathname: '/' });
        })
        .catch(err => setAuthError(err));
    }
  };
  const facebookLogin = () => {
    setAuthError(null);
    if (facebookSignIn) {
      facebookSignIn(passcode)
        .then(() => {
          history.replace(location?.state?.from || { pathname: '/' });
        })
        .catch(err => setAuthError(err));
    }
  };
  const twitterLogin = () => {
    setAuthError(null);
    if (twitterSignIn) {
      twitterSignIn(passcode)
        .then(() => {
          history.replace(location?.state?.from || { pathname: '/' });
        })
        .catch(err => setAuthError(err));
    }
  };
  const gitHubLogin = () => {
    setAuthError(null);
    if (gitHubSignIn) {
      gitHubSignIn(passcode)
        .then(() => {
          history.replace(location?.state?.from || { pathname: '/' });
        })
        .catch(err => setAuthError(err));
    }
  };

  return (
    <div className={classes.container}>
      <Typography align="center" variant="h4">
        Welcome Back!
      </Typography>
      <FormControl className={classes.formStyle} variant="outlined">
        <OutlinedInput
          style={{ color: 'black', fontSize: '18px' }}
          id="outlined-adornment-weight"
          placeholder="email"
          onChange={handleChange('weight')}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
          labelWidth={0}
        />
      </FormControl>
      <FormControl className={classes.formStyle} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password" style={{ color: '#949494', fontSize: '16px' }}>
          Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      <Grid container justify="center">
        <Button style={{ width: '80%', fontSize: '1.2rem' }} variant="contained" color="primary" type="submit">
          Log In
        </Button>
      </Grid>
      <Typography align="center" variant="subtitle">
        Forgot your login details? <a href="/">Click here</a>
      </Typography>
      <div>
        <h5 className={classes.horizontalText}>
          <span style={{ background: '#c1c1c1', padding: '0 15px ', fontSize: '1em' }}>OR</span>
        </h5>
      </div>
      <div className={classes.btnWrap}>
        <Button
          style={{ marginBottom: '10px' }}
          variant="contained"
          className={classes.googleButton}
          startIcon={<GoogleLogo />}
          onClick={googleLogin}
        >
          Sign in with Google
        </Button>
        <Button
          style={{ marginBottom: '10px' }}
          variant="contained"
          className={classes.googleButton}
          onClick={facebookLogin}
        >
          <FacebookIcon />
          Sign in with Facebook
        </Button>
        <Button
          style={{ marginBottom: '10px' }}
          variant="contained"
          className={classes.googleButton}
          onClick={twitterLogin}
        >
          <TwitterIcon style={{ margin: '0 10px 5px 0' }} />
          Sign in with Twitter
        </Button>
        <Button
          style={{ marginBottom: '10px' }}
          variant="contained"
          className={classes.googleButton}
          onClick={gitHubLogin}
        >
          <GitHubIcon style={{ margin: '0 10px 5px 0' }} />
          Sign in with GitHub
        </Button>
      </div>
      <Typography align="center" variant="subtitle">
        Don't have an account? <a href="/register">Sign up</a>
      </Typography>
    </div>
  );
};
const styles = ({ palette, breakpoints, spacing, typography }) => ({
  container: {
    backgroundColor: '#c1c1c1',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '50%',
    padding: '30px 30px',
    margin: '100px auto',
    borderRadius: '20px',
    justifyContent: 'space-between',
    height: '600px',
  },
  buttonStyle: {
    color: '#6574FE',
  },
  horizontalText: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #f5f5f5',
    lineHeight: '0.1em',
    margin: '10px 0 20px',
  },
  filled: {
    backgroundColor: '#eae9e9',
  },
  btnWrap: {
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    width: '450px',
    height: 'auto',
    justifyContent: 'space-between',
  },
  formStyle: {
    backgroundColor: '#f5f5f5',
  },
});

export default withStyles(styles)(CustomLogin);
