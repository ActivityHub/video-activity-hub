import React, { ChangeEvent, useState, FormEvent } from 'react';
import { useAppState } from '../../state';

import Button from '@material-ui/core/Button';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as GoogleLogo } from './google-logo.svg';
import { InputLabel, Theme } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({}));

const Title = styled.h2({
  position: 'center',
  textTransform: 'uppercase',
  fontFamily: 'Helvetica',
});

const CategoryCol = styled.div({
  [`:hover ${Col}`]: {
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  [`:hover ${Title}`]: {
    transform: 'translate3d(0,0,0)',
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

const CookingImage = styled.div({});
const PhotoImage = styled.div({});
const FitnessImage = styled.div({});
const ArtistImage = styled.div({});
const MusicImage = styled.div({});
const GamingImage = styled.div({});
const MixologyImage = styled.div({});
const DanceImage = styled.div({});

export default function CategoriesPage() {
  // function hoverHandler(e) {
  //   e.target.style.
  // }

  return (
    <Container>
      <Row>
        <Col>
          <Image src="" rounded />
          <Hover>
            <Title>Art</Title>
          </Hover>
        </Col>
        <Col>
          <Image src="" rounded />
          <Hover>
            <Title>Music</Title>
          </Hover>
        </Col>
        <Col>
          <Image src="" rounded />
          <Hover>
            <Title>Photography</Title>
          </Hover>
        </Col>
        <Col>
          <Image src="" rounded />
          <Hover>
            <Title>Cooking</Title>
          </Hover>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src="" rounded />
          <Hover>
            <Title>Dance</Title>
          </Hover>
        </Col>
        <Col>
          <Image src="" rounded />
          <Hover>
            <Title>Mixology</Title>
          </Hover>
        </Col>
        <Col>
          <Image src="" rounded />
          <Hover>
            <Title>Gaming</Title>
          </Hover>
        </Col>
        <Col>
          <Image src="" rounded />
          <Hover>
            <Title>Fitness</Title>
          </Hover>
        </Col>
      </Row>
      <Button>View All Categories</Button>
      <Button>Done</Button>
    </Container>
  );
}
