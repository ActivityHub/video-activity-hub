import React from 'react';
import { Link } from 'react-router-dom';
import './MainActivities.scss';

// import Avatar from 'react-avatar';
import { Card, CardDeck, Button, Form, FormControl } from 'react-bootstrap';
import baking from '../../images/mainactivities-baking.png';
import broadway from '../../images/mainactivities-broadway.png';
import cocktail from '../../images/mainactivities-cocktail.png';
import cocktail1 from '../../images/mainactivities-cocktail1.png';
import drag from '../../images/mainactivities-drag.png';
import french from '../../images/mainactivities-french.png';
import guitar from '../../images/mainactivities-guitar.png';
import pasta from '../../images/mainactivities-pasta.png';
import piano from '../../images/mainactivities-piano.png';
import rock from '../../images/mainactivities-rock.png';
import salad from '../../images/mainactivities-salad.png';
import santorini from '../../images/mainactivities-santorini.png';

const MainActivities = () => {
  return (
    <div className="MainActivities-Wrapper">
      {/* <div className="MainActivities-Header">
        <p>The Hub</p>
        <Avatar
          size="80"
          round={true}
          className="avatar"
          src="https://images.unsplash.com/photo-1550935114-99de2f488f47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
      </div> */}
      <div className="MainActivities-SearchBar">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
      <div className="MainActivities-Filter">
        <div className="MainActivities-Filter1">
          <Button variant="outline-secondary">Dates</Button>
          <Button variant="outline-secondary">Time of day</Button>
          <Button variant="outline-secondary">Price</Button>
          <Button variant="outline-secondary">Language offered</Button>
        </div>
        <div className="MainActivities-Filter2">
          <Button variant="outline-success">Mixology</Button>
          <Button variant="outline-success">Cooking</Button>
          <Button variant="outline-success">Music</Button>
          <Button variant="outline-success">World Travel</Button>
        </div>
      </div>
      <div className="MainActivities-Weekly-Wrapper">
        <h2>This Week's Events</h2>
        <div className="MainActivities-Weekly-Container">
          <CardDeck>
            <Card bg="card-theme">
              <Link to="/room/piano-classic">
                <Card.Img variant="top" src={piano} />
                <Card.Body>
                  <Card.Title>Piano Classics</Card.Title>
                  <Card.Text className="date">Jan 7, 2020</Card.Text>
                  <Card.Text className="price">$15.00/person</Card.Text>
                </Card.Body>
              </Link>
            </Card>
            <Card bg="card-theme">
              <Card.Img variant="top" src={salad} />
              <Card.Body>
                <Card.Title>Scrumptious Salads</Card.Title>
                <Card.Text className="date">Jan 9, 2020</Card.Text>
                <Card.Text className="price">$20.00/person</Card.Text>
              </Card.Body>
            </Card>
            <Card bg="card-theme">
              <Card.Img variant="top" src={guitar} />
              <Card.Body>
                <Card.Title>Acoustic Guitar Basics</Card.Title>
                <Card.Text className="date">Jan 10, 2020</Card.Text>
                <Card.Text className="price">$25.00/person</Card.Text>
              </Card.Body>
            </Card>
            <Card bg="card-theme">
              <Card.Img variant="top" src={santorini} />
              <Card.Body>
                <Card.Title>A Day In Santorini</Card.Title>
                <Card.Text className="date">Jan 12, 2020</Card.Text>
                <Card.Text className="price">$10.00/person</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
      <div className="MainActivities-Aligned-Wrapper">
        <h2>Aligned With You</h2>
        <div className="MainActivities-Aligned-Container">
          <CardDeck>
            <Card bg="card-theme">
              <Card.Img variant="top" src={pasta} />
              <Card.Body>
                <Card.Title>Cooking Italian Favourites</Card.Title>
                <Card.Text className="date">Jan 8, 2020</Card.Text>
                <Card.Text className="price">$35.00/person</Card.Text>
              </Card.Body>
            </Card>
            <Card bg="card-theme">
              <Card.Img variant="top" src={baking} />
              <Card.Body>
                <Card.Title>Baking With Grandma</Card.Title>
                <Card.Text className="date">Jan 11, 2020</Card.Text>
                <Card.Text className="price">$5.00/person</Card.Text>
              </Card.Body>
            </Card>
            <Card bg="card-theme">
              <Card.Img variant="top" src={rock} />
              <Card.Body>
                <Card.Title>It's All About Rock N'Roll</Card.Title>
                <Card.Text className="date">Jan 12, 2020</Card.Text>
                <Card.Text className="price">$12.00/person</Card.Text>
              </Card.Body>
            </Card>
            <Card bg="card-theme">
              <Card.Img variant="top" src={cocktail} />
              <Card.Body>
                <Card.Title>Ginspiration Cocktails</Card.Title>
                <Card.Text className="date">Jan 14, 2020</Card.Text>
                <Card.Text className="price">$15.00/person</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
      <div className="MainActivities-New-Wrapper">
        <h2>Try Something New</h2>
        <div className="MainActivities-New-Container">
          <CardDeck>
            <Card bg="card-theme">
              <Card.Img variant="top" src={broadway} />
              <Card.Body>
                <Card.Title>Sing Songs With A Broadway Star</Card.Title>
                <Card.Text className="date">Jan 9, 2020</Card.Text>
                <Card.Text className="price">$110.00/person</Card.Text>
              </Card.Body>
            </Card>
            <Card bg="card-theme">
              <Card.Img variant="top" src={drag} />
              <Card.Body>
                <Card.Title>Sangria & Secrets with Drag Queens</Card.Title>
                <Card.Text className="date">Jan 30, 2020</Card.Text>
                <Card.Text className="price">$15.00/person</Card.Text>
              </Card.Body>
            </Card>
            <Card bg="card-theme">
              <Card.Img variant="top" src={french} />
              <Card.Body>
                <Card.Title>Learning French</Card.Title>
                <Card.Text className="date">Jan 31, 2020</Card.Text>
                <Card.Text className="price">$10.00/person</Card.Text>
              </Card.Body>
            </Card>
            <Card bg="card-theme">
              <Card.Img variant="top" src={cocktail1} />
              <Card.Body>
                <Card.Title>Making Cocktails</Card.Title>
                <Card.Text className="date">Jan 31, 2020</Card.Text>
                <Card.Text className="price">$15.00/person</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
      <div className="MainActivities-btn-Wrapper">
        <Button variant="primary" className="MainActivities-btn">
          Load More
        </Button>
      </div>
    </div>
  );
};

export default MainActivities;
