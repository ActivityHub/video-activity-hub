import React from 'react';

import { BackInTimeIcon } from '../../icons/BackInTime';
import { Family } from '../../icons/Family';
import { Solution } from '../../icons/Solution';
import { Sprout } from '../../icons/Sprout';
import './Features.style.scss';

const Features = () => (
  <div className="features-main">
    <div className="features-item">
      <Solution className="features-svg" />
      <span className="features-text">Select your interests and hobbies</span>
    </div>
    <div className="features-item">
      <BackInTimeIcon className="features-svg" />
      <span className="features-text">Schedule your online experiences</span>
    </div>
    <div className="features-item">
      <Family className="features-svg" />
      <span className="features-text">Invite your family, friends or co-workers</span>
    </div>
    <div className="features-item">
      <Sprout className="features-svg" />
      <span className="features-text">Grow your interests</span>
    </div>
  </div>
);

export default Features;
