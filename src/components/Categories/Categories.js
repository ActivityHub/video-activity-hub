import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import art from './images/art.png';
import music from './images/music.png';
import photo from './images/photo.png';
import cooking from './images/cooking.png';
import dance from './images/dance.png';
import mixology from './images/mixology.png';
import gaming from './images/gaming.png';
import fitness from './images/fitness.png';

import './Categories.scss';

// import styled from 'styled-components';
//
// const useStyles = makeStyles((theme: Theme) => ({}));

const CategoriesPage = () => {
  return (
    <div className="category-background">
      <div className="category-container">
        <div className="category-heading">
          <h2>Let's Dig Deeper</h2>
          <p>
            Select&nbsp;<span className="heading-interests">5+ interests</span>&nbsp;and we will suggest exciting
            experiences you can be part of
          </p>
        </div>
        <div className="category-pictures">
          <div className="cat-col">
            <div className="art">
              <Image src={art} rounded width="250" height="256" alt="Art" className="art-image" />
              <div className="image-overlay">
                <h4 className="image-text">ART</h4>
              </div>
            </div>
            <div className="music">
              <Image src={music} rounded width="250" height="256" alt="Music" className="music-image" />
              <div className="image-overlay">
                <h4 className="image-text">MUSIC</h4>
              </div>
            </div>
          </div>
          <div className="cat-col">
            <div className="photo">
              <Image src={photo} rounded width="250" height="256" alt="Photo" className="photo-image" />
              <div className="image-overlay">
                <h4 className="image-text">PHOTO</h4>
              </div>
            </div>
            <div className="cooking">
              <Image src={cooking} rounded width="250" height="256" alt="Cooking" className="cooking-image" />
              <div className="image-overlay">
                <h4 className="image-text">COOKING</h4>
              </div>
            </div>
          </div>
          <div className="cat-col">
            <div className="dance">
              <Image src={dance} rounded width="250" height="256" alt="Dance" className="dance-image" />
              <div className="image-overlay">
                <h4 className="image-text">DANCE</h4>
              </div>
            </div>
            <div className="mixology">
              <Image src={mixology} rounded width="250" height="256" alt="Mixology" className="mixology-image" />
              <div className="image-overlay">
                <h4 className="image-text">MIXOLOGY</h4>
              </div>
            </div>
          </div>
          <div className="cat-col">
            <div className="gaming">
              <Image src={gaming} rounded width="250" height="256" alt="Gaming" className="gaming-image" />
              <div className="image-overlay">
                <h4 className="image-text">GAMING</h4>
              </div>
            </div>
            <div className="fitness">
              <Image src={fitness} rounded width="250" height="256" alt="Fitness" className="fitness-image" />
              <div className="image-overlay">
                <h4 className="image-text">FITNESS</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="category-btn">
          <Button variant="secondary" className="viewall-btn">
            View all categories
          </Button>
          <Link to="/activities">
            <Button variant="primary" className="done-btn">
              Done
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
