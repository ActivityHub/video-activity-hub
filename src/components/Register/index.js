import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { FlexFlowContext } from 'twilio/lib/rest/flexApi/v1/flexFlow';

const RegisterPage = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.leftContainer}>
        <h1>The Hub</h1>
        <p>Image</p>
      </div>
      <form className={classes.form} noValidate autoComplete="off">
        <div className={classes.inputName}>
          <TextField
            required
            style={{ paddingRight: '10px' }}
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />

          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
        </div>
        <TextField
          className={classes.inputText}
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          className={classes.inputText}
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </form>
    </div>
  );
};
const styles = ({ palette, breakpoints, spacing, typography }) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '50px',
  },
  leftContainer: {
    margin: '50px',
    borderRadius: '20px',
  },
  inputName: {
    display: 'flex',
    padding: '10px',
    marginBottom: '10px',
  },
  inputText: {
    marginBottom: '10px',
  },
});

export default withStyles(styles)(RegisterPage);
