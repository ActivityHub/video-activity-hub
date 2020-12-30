import React from 'react';
import Avatar from 'react-avatar';

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
      <div className="MainActivities-Header">
        <p>The Hub</p>
        <Avatar
          size="80"
          round={true}
          className="avatar"
          src="https://images.unsplash.com/photo-1550935114-99de2f488f47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
      </div>
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
          <Button variant="primary" className="done-btn">
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;

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
