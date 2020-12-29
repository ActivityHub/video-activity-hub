import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

const CustomLogin = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Typography align="center" variant="h5">
        Welcome Back!
      </Typography>
      <TextField id="filled-basic" label="Email" className={classes.filled} />
      <TextField id="filled-basic" label="Password" className={classes.filled} />
      <Grid container justify="center">
        <Button variant="contained" color="primary" type="submit">
          Log In
        </Button>
      </Grid>
      <Typography align="center" variant="subtitle">
        Forgot your login details? Click here
      </Typography>
      <div>
        <h5 className={classes.horizontalText}>
          <span style={{ background: '#c1c1c1', padding: '0 10px ' }}>or</span>
        </h5>
      </div>
      <Grid container justify="center">
        <Button variant="contained" color="primary" type="submit">
          google
        </Button>
        <Button variant="contained" color="primary" type="submit">
          facebook
        </Button>
      </Grid>
      <Grid container justify="center">
        <Button variant="contained" color="primary" type="submit">
          twitter
        </Button>
        <Button variant="contained" color="primary" type="submit">
          mac
        </Button>
      </Grid>
      <Typography align="center" variant="subtitle">
        Don't have an account? Sign up
      </Typography>
    </div>
  );
};
const styles = ({ palette, breakpoints, spacing, typography }) => ({
  container: {
    backgroundColor: '#c1c1c1',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '60%',
    padding: '60px 30px',
    margin: '100px auto',
    borderRadius: '20px',
    justifyContent: 'space-around',
    height: '600px',
  },
  buttonStyle: {
    color: '#6574FE',
  },
  horizontalText: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    margin: '10px 0 20px',
  },
  filled: {
    backgroundColor: '#eae9e9',
  },
});

export default withStyles(styles)(CustomLogin);
