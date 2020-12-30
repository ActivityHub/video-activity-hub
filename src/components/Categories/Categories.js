import React, { ChangeEvent, useState, FormEvent } from 'react';
import { useAppState } from '../../state';

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
// import { ReactComponent as GoogleLogo } from './google-logo.svg';

import styled from 'styled-components';

const useStyles = makeStyles((theme: Theme) => ({}));

const CategoriesPage = () => {
  return (
    <div className="category-background">
      <div className="category-container">
        <div className="category-heading">
          <h2>Let's Dig Deeper</h2>
          <h6>Select 5+ interests and we will suggest exciting experiences you can be part of</h6>
        </div>
        <div className="category-pictures">
          <Image src={art} rounded width="150" height="175" alt="Art" className="art" />
          <Image src={music} rounded width="150" height="175" alt="Music" className="music" />
          <Image src={photo} rounded width="150" height="175" alt="Photo" className="photo" />
          <Image src={cooking} rounded width="150" height="175" alt="Cooking" className="cooking" />
          <Image src={dance} rounded width="150" height="175" alt="Dance" className="dance" />
          <Image src={mixology} rounded width="150" height="175" alt="Mixology" className="mixology" />
          <Image src={gaming} rounded width="150" height="175" alt="Gaming" className="gaming" />
          <Image src={fitness} rounded width="150" height="175" alt="Fitness" className="fitness" />
        </div>
        <Button variant="primary" className="viewall-btn">
          View All Categories
        </Button>
        <Button variant="secondary" className="done-btn">
          Done
        </Button>
      </div>
    </div>
  );
};

//   return (
//     <Container>
//       // <AppTitle>The Hub</AppTitle>
//       // <MemberMsg>Already a member? <link href="#">Sign In</link></MemberMsg>
//       // <PageHeader></PageHeader>
//       <
//       <Row>
//         <Col>
//           <ArtImage rounded />
//           <Hover>
//             <CategoryTitle>Art</CategoryTitle>
//           </Hover>
//         </Col>
//         <Col>
//           <MusicImage rounded />
//           <Hover>
//             <CategoryTitle>Music</CategoryTitle>
//           </Hover>
//         </Col>
//         <Col>
//           <PhotoImage rounded />
//           <Hover>
//             <CategoryTitle>Photography</CategoryTitle>
//           </Hover>
//         </Col>
//         <Col>
//           <CookingImage rounded />
//           <Hover>
//             <CategoryTitle>Cooking</CategoryTitle>
//           </Hover>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <DanceImage rounded />
//           <Hover>
//             <CategoryTitle>Dance</CategoryTitle>
//           </Hover>
//         </Col>
//         <Col>
//           <MixologyImage rounded />
//           <Hover>
//             <CategoryTitle>Mixology</CategoryTitle>
//           </Hover>
//         </Col>
//         <Col>
//           <GamingImage rounded />
//           <Hover>
//             <CategoryTitle>Gaming</CategoryTitle>
//           </Hover>
//         </Col>
//         <Col>
//           <FitnessImage rounded />
//           <Hover>
//             <CategoryTitle>Fitness</CategoryTitle>
//           </Hover>
//         </Col>
//       </Row>
//       <Button>View All Categories</Button>
//       <Button>Done</Button>
//     </Container>
//   );
// const CategoryTitle = styled.h2({
//   position: 'center',
//   textTransform: 'uppercase',
//   fontFamily: 'Helvetica',
// });
//
// const CategoryCol = styled.div({
//   [`:hover ${Col}`]: {
//     backgroundColor: 'rgba(0,0,0,.5)',
//   },
//   [`:hover ${Title}`]: {
//     transform: 'translate3d(0,0,0)',
//   },
//   [`:hover ${Hover}`]: {
//     opacity: 1,
//   },
// });
//
// const ArtImage = styled.div({
//   backgroundImage: "url(./src/components/Categories/images/art.png
// });
// const MusicImage = styled.div({
//   backgroundImage: "url(./src/components/Categories/images/music.png
// });
// const PhotoImage = styled.div({
//   backgroundImage: "url(./src/components/Categories/images/photo.png
// });
// const CookingImage = styled.div({
//   backgroundImage: "url(./src/components/Categories/images/cooking.png)"
// });
// const DanceImage = styled.div({
//   backgroundImage: "url(./src/components/Categories/images/dance.png
// });
// const MixologyImage = styled.div({
//   backgroundImage: "url(./src/components/Categories/images/mixology.png
// });
// const GamingImage = styled.div({
//   backgroundImage: "url(./src/components/Categories/images/gaming.png
// });
// const FitnessImage = styled.div({
//   backgroundImage: "url(./src/components/Categories/images/fitness.png
// });
