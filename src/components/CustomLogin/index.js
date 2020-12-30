import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';
import TwitterIcon from '@material-ui/icons/Twitter';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Link } from 'react-router-dom';

import { ReactComponent as GoogleLogo } from './google-logo.svg';

const CustomLogin = ({ classes }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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

  const useStyles = makeStyles(theme => ({
    googleButton: {
      background: 'gray',
      color: 'rgb(0, 94, 166)',
      borderRadius: '4px',
      maxWidth: '65px',
      border: '2px solid rgb(2, 122, 197)',
      textTransform: 'none',
      boxShadow: 'none',
      padding: '0.3em 1em',
      [theme.breakpoints.down('sm')]: {
        width: '80%',
      },
      '&:hover': {
        background: 'white',
        boxShadow: 'none',
      },
    },
  }));
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      {open ? (
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
            <Button
              style={{ width: '80%', fontSize: '1.2rem' }}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleClose} //should be redirect to some whare
            >
              Log In
            </Button>
          </Grid>
          <Typography align="center" variant="subtitle">
            Forgot your login details? <Link to="/change-password">Click here</Link>
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
              <AppleIcon style={{ margin: '0 10px 5px 0' }} />
              Sign in with Apple ID
            </Button>
          </div>
          <Typography align="center" variant="subtitle">
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </Typography>
        </div>
      ) : null}
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
