import React from 'react';
import Slideshow from '../slideshow/Slideshow';
import './MainContent.scss';

const MainContent = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1499344/pexels-photo-1499344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
      url: 'https://images.pexels.com/photos/2527491/pexels-photo-2527491.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
      url: 'https://images.pexels.com/photos/60635/cat-animals-kitten-kitty-60635.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    }
  ];

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">paginate</div>
      </div>
      {/* grid component */}
    </div>
  );
};

export default MainContent;
