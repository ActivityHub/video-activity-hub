import React from 'react';
import './MainActivities.scss';

import Avatar from 'react-avatar';
import { Card, CardDeck, Button } from 'react-bootstrap';
// import background from '../../images/homepage-bkg.png';
// import camera from '../../images/homepage-camera.png';
// import pottery from '../../images/homepage-pottery.png';
// import oldYoung from '../../images/homepage-oldyoung.png';

const MainActivities = () => {
  return (
    <div className="MainActivities-Wrapper">
      <div className="MainActivities-Header">
        <p>The Hub</p>
        <Avatar
          size="60"
          round={true}
          className="avatar"
          src="https://images.unsplash.com/photo-1550935114-99de2f488f47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
      </div>
      <div className="MainActivities-SearchBar"></div>
      <div className="MainActivities-Filter">
        <div className="MainActivities-Filter1"></div>
        <div className="MainActivities-Filter2"></div>
      </div>
      <div className="MainActivities-Weekly-Wrapper">
        <h2>This Week's Events</h2>
        <div className="MainActivities-Weekly-Container">
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This card
                  has even longer content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      </div>
      <div className="MainActivities-Aligned-Wrapper">
        <h2>Aligned With You</h2>
        <div className="MainActivities-Aligned-Container">
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This card
                  has even longer content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      </div>
      <div className="MainActivities-New-Wrapper">
        <h2>Try Something New</h2>
        <div className="MainActivities-New-Container">
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This card
                  has even longer content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      </div>
      <Button variant="primary" className="MainActivities-btn">
        Load More
      </Button>
    </div>
  );
};

export default MainActivities;
