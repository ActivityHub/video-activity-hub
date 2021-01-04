import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Fade, Menu, MenuItem, useMediaQuery, useTheme } from '@material-ui/core';
import { MoreVert, ExpandLess } from '@material-ui/icons';

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

import './ShareMenu.styles.scss';

const ShareMenu = props => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [menuOpen, setMenuOpen] = useState(null);

  const closeMenu = () => {
    setMenuOpen(null);
  };

  return (
    <>
      <Button
        onClick={event => {
          setMenuOpen(event.currentTarget);
        }}
      >
        {isMobile ? (
          <MoreVert />
        ) : (
          <>
            Share Link
            <ExpandLess />
          </>
        )}
      </Button>
      <Menu
        open={Boolean(menuOpen)}
        onClose={closeMenu}
        anchorEl={menuOpen}
        keepMounted
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: isMobile ? -55 : 'bottom',
          horizontal: 'left',
        }}
        TransitionComponent={Fade}
      >
        <MenuItem className="share-menu-item" onClick={closeMenu}>
          <EmailShareButton
            url={`https://video-activity-hub.herokuapp.com${props.match.url}`}
            quote={`Join us in ${props.match.params.URLRoomName}`}
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={32} round />
            <span>Email</span>
          </EmailShareButton>
        </MenuItem>
        <MenuItem className="share-menu-item" onClick={closeMenu}>
          <FacebookShareButton
            url={`https://video-activity-hub.herokuapp.com${props.match.url}`}
            quote={`Join us in ${props.match.params.URLRoomName}`}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
            <span>Facebook</span>
          </FacebookShareButton>
        </MenuItem>
        <MenuItem className="share-menu-item" onClick={closeMenu}>
          <LinkedinShareButton
            url={`https://video-activity-hub.herokuapp.com${props.match.url}`}
            quote={`Join us in ${props.match.params.URLRoomName}`}
            className="Demo__some-network__share-button"
          >
            <LinkedinIcon size={32} round />
            <span>LinkedIn</span>
          </LinkedinShareButton>
        </MenuItem>
        <MenuItem className="share-menu-item" onClick={closeMenu}>
          <RedditShareButton
            url={`https://video-activity-hub.herokuapp.com${props.match.url}`}
            quote={`Join us in ${props.match.params.URLRoomName}`}
            className="Demo__some-network__share-button"
          >
            <RedditIcon size={32} round />
            <span>Reddit</span>
          </RedditShareButton>
        </MenuItem>
        <MenuItem className="share-menu-item" onClick={closeMenu}>
          <TumblrShareButton
            url={`https://video-activity-hub.herokuapp.com${props.match.url}`}
            quote={`Join us in ${props.match.params.URLRoomName}`}
            className="Demo__some-network__share-button"
          >
            <TumblrIcon size={32} round />
            <span>Tumblr</span>
          </TumblrShareButton>
        </MenuItem>
        <MenuItem className="share-menu-item" onClick={closeMenu}>
          <TwitterShareButton
            url={`https://video-activity-hub.herokuapp.com${props.match.url}`}
            quote={`Join us in ${props.match.params.URLRoomName}`}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round />
            <span>Twitter</span>
          </TwitterShareButton>
        </MenuItem>
        <MenuItem className="share-menu-item" onClick={closeMenu}>
          <WhatsappShareButton
            url={`https://video-activity-hub.herokuapp.com${props.match.url}`}
            quote={`Join us in ${props.match.params.URLRoomName}`}
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
            <span>WhatsApp</span>
          </WhatsappShareButton>
        </MenuItem>
      </Menu>
    </>
  );
};

export default withRouter(ShareMenu);
