import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from './App';
import AppStateProvider, { useAppState } from './state';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ErrorDialog from './components/ErrorDialog/ErrorDialog';
import LoginPage from './components/LoginPage/LoginPage';
import CustomLogin from './components/CustomLogin';
import RegisterPage from './components/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import theme from './theme';
import './types';
import { VideoProvider } from './components/VideoProvider';
import useConnectionOptions from './utils/useConnectionOptions/useConnectionOptions';
import UnsupportedBrowserWarning from './components/UnsupportedBrowserWarning/UnsupportedBrowserWarning';
import Features from './components/Features/Features';

import CategoriesPage from './components/Categories/Categories';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import CategoriesPage from './components/Categories/Categories.js';

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
            {/* Originally <VideoApp />, remove <HomePage /> after building and testing */}
            {/* <RegisterPage /> */}
            {/* <VideoApp /> */}
            <NavBar />
            <HomePage />
          </Route>
          <PrivateRoute path="/room/:URLRoomName">
            <VideoApp />
          </PrivateRoute>
          <Route path="/login">
            <CustomLogin />
            {/* <LoginPage /> */}
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/features">
            <NavBar />
            <Features />
          </Route>
          <Route path="/activities">
            <NavBar />
            <CategoriesPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </AppStateProvider>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
