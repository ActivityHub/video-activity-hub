import React from 'react';
import './HomePage.scss';
import { Button, Image } from 'react-bootstrap';
import background from '../../images/homepage-bkg.png';
import camera from '../../images/homepage-camera.png';
import pottery from '../../images/homepage-pottery.png';
import oldYoung from '../../images/homepage-oldyoung.png';

import { useAppState } from '../../state';

const HomePage = () => {
  const { isAuthReady, user } = useAppState();
  return (
    <div className="homepage-wrapper" style={{ backgroundImage: `url(${background})` }}>
      <div className="homepage-title-container">
        <h1>Create experiences together</h1>
        {user || !isAuthReady ? (
          ''
        ) : (
          <Button variant="primary" className="homepage-btn" href="/register">
            Sign Up
          </Button>
        )}
      </div>
      <div className="homepage-pictures">
        <Image
          src={oldYoung}
          roundedCircle
          width="242"
          height="242"
          alt="Image of old man teaching young boy"
          className="oldYoung"
        />
        <Image
          src={pottery}
          roundedCircle
          width="203"
          height="203"
          alt="Image of man doing pottery"
          className="pottery"
        />
        <Image
          src={camera}
          roundedCircle
          width="219"
          height="219"
          alt="Image of woman holding camera"
          className="camera"
        />
      </div>
    </div>
  );
};

export default HomePage;
