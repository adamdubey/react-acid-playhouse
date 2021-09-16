import React, { useState } from 'react';
import Paginate from '../paginate/Paginate';
import Slideshow from '../slideshow/Slideshow';
import Grid from '../grid/Grid';
import './MainContent.scss';

const MainContent = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1499344/pexels-photo-1499344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      rating: 4
    },
    {
      url: 'https://images.pexels.com/photos/2527491/pexels-photo-2527491.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      rating: 5
    },
    {
      url: 'https://images.pexels.com/photos/60635/cat-animals-kitten-kitty-60635.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      rating: 4.5
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
