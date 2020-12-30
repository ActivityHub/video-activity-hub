import React from 'react';

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
          <h6>Select 5+ interests and we will suggest exciting experiences you can be part of</h6>
        </div>
        <div className="category-pictures">
          <div className="cat-col">
            <div className="art">
              <Image src={art} rounded width="150" height="150" alt="Art" className="art-image" />
              <div className="image-overlay">
                <div className="image-text">ART</div>
              </div>
            </div>
            <div className="music">
              <Image src={music} rounded width="150" height="150" alt="Music" className="music-image" />
              <div className="image-overlay">
                <div className="image-text">MUSIC</div>
              </div>
            </div>
          </div>
          <div className="cat-col">
            <div className="photo">
              <Image src={photo} rounded width="150" height="150" alt="Photo" className="photo-image" />
              <div className="image-overlay">
                <div className="image-text">PHOTO</div>
              </div>
            </div>
            <div className="cooking">
              <Image src={cooking} rounded width="150" height="150" alt="Cooking" className="cooking-image" />
              <div className="image-overlay">
                <div className="image-text">COOKING</div>
              </div>
            </div>
          </div>
          <div className="cat-col">
            <div className="dance">
              <Image src={dance} rounded width="150" height="150" alt="Dance" className="dance-image" />
              <div className="image-overlay">
                <div className="image-text">DANCE</div>
              </div>
            </div>
            <div className="mixology">
              <Image src={mixology} rounded width="150" height="150" alt="Mixology" className="mixology-image" />
              <div className="image-overlay">
                <div className="image-text">MIXOLOGY</div>
              </div>
            </div>
          </div>
          <div className="cat-col">
            <div className="gaming">
              <Image src={gaming} rounded width="150" height="150" alt="Gaming" className="gaming-image" />
              <div className="image-overlay">
                <div className="image-text">GAMING</div>
              </div>
            </div>
            <div className="fitness">
              <Image src={fitness} rounded width="150" height="150" alt="Fitness" className="fitness-image" />
              <div className="image-overlay">
                <div className="image-text">FITNESS</div>
              </div>
            </div>
          </div>
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
