import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from './App';
import AppStateProvider, { useAppState } from './state';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ErrorDialog from './components/ErrorDialog/ErrorDialog';
import CustomLogin from './components/CustomLogin';
import RegisterPage from './components/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import theme from './theme';
import './types';
import { VideoProvider } from './components/VideoProvider';
import useConnectionOptions from './utils/useConnectionOptions/useConnectionOptions';
import UnsupportedBrowserWarning from './components/UnsupportedBrowserWarning/UnsupportedBrowserWarning';
import Features from './components/Features/Features';
import MainActivities from './components/MainActivities/MainActivities';

import CategoriesPage from './components/Categories/Categories';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';

const VideoApp = () => {
  const { error, setError } = useAppState();
  const connectionOptions = useConnectionOptions();

  return (
    <UnsupportedBrowserWarning>
      <VideoProvider options={connectionOptions} onError={setError}>
        <ErrorDialog dismissError={() => setError(null)} error={error} />
        <App />
      </VideoProvider>
    </UnsupportedBrowserWarning>
  );
};

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <AppStateProvider>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <HomePage />
          </Route>
          <PrivateRoute path="/room/:URLRoomName">
            <VideoApp />
          </PrivateRoute>
          <Route path="/login">
            <CustomLogin />
          </Route>
          <Route path="/register">
            <NavBar />
            <RegisterPage />
          </Route>
          <Route path="/features">
            <NavBar />
            <Features />
          </Route>
          <Route path="/categories">
            <NavBar />
            <CategoriesPage />
          </Route>
          <Route path="/activities">
            <NavBar />
            <MainActivities />
          </Route>
          <Redirect to="/" />
        </Switch>
      </AppStateProvider>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
