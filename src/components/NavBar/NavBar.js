import React, { useCallback, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
// import { makeStyles, Typography, Button, MenuItem, Link, Menu } from '@material-ui/core';
import { makeStyles, Menu, MenuItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useAppState } from '../../state';
import UserAvatar from '../IntroContainer/UserMenu/UserAvatar/UserAvatar';

import './NavBar.scss';

const useStyles = makeStyles({
  userContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: '1em',
    display: 'flex',
    alignItems: 'center',
    float: 'right',
  },
  userButton: {
    color: 'black',
    marginLeft: '50px',
    backgroundColor: 'inherit !important',
    border: '0px',
    '&:hover, &:focus': {
      color: '#6574FE',
    },
  },
  logoutLink: {
    color: 'white',
    cursor: 'pointer',
    padding: '10px 20px',
  },
});

const NavBar = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(null);
  const { isAuthReady, user, signOut } = useAppState();

  const handleSignOut = useCallback(() => {
    if (signOut) {
      signOut();
    }
  }, [signOut]);

  let avatarButton = '';
  if (user) {
    avatarButton = (
      <React.Fragment className={classes.userContainer}>
        <UserAvatar user={user} />
        <Button onClick={event => setMenuOpen(event.currentTarget)} className={classes.userButton}>
          {user ? user.displayName : ''}
          <ExpandMoreIcon />
        </Button>
        <Menu
          open={Boolean(menuOpen)}
          onClose={() => setMenuOpen(null)}
          anchorEl={menuOpen}
          keepMounted
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleSignOut}>Logout</MenuItem>
        </Menu>
      </React.Fragment>
    );
  }

  return (
    <Navbar>
      <Navbar.Brand as={Link} to="/">
        <span className="NavBar-title">The Hub</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/features">
            Features
          </Nav.Link>
          <Nav.Link as={Link} to="/categories">
            Categories
          </Nav.Link>
        </Nav>
        {user || !isAuthReady ? (
          avatarButton
        ) : (
          <Button variant="primary" className="NavBar-btn" href="/login">
            Log In
          </Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavBar);
