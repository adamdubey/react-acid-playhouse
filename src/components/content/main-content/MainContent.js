import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paginate from '../paginate/Paginate';
import Slideshow from '../slideshow/Slideshow';
import Grid from '../grid/Grid';
import './MainContent.scss';
import { IMAGE_URL } from '../../../services/movies.service';

const MainContent = (props) => {
  const { list } = props;
  const imagesArray = [
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
  const [images, setImages] = useState([]);
  const randomMovies = list.sort(() => Math.random() - Math.random()).slice(0, 4);

  useEffect(() => {
    if (randomMovies.length) {
      const IMAGES = [
        {
          id: 1,
          url: `${IMAGE_URL}/${randomMovies[0].backdrop_path}`
        },
        {
          id: 2,
          url: `${IMAGE_URL}/${randomMovies[1].backdrop_path}`
        },
        {
          id: 3,
          url: `${IMAGE_URL}/${randomMovies[2].backdrop_path}`
        }
      ];
      setImages(IMAGES);
    }
    // eslint-disable-next-line
  }, []);

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
      <Grid images={imagesArrray} />
    </div>
  );
};

MainContent.propTypes = {
  list: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  list: state.movies.list
});

export default connect(mapStateToProps, {})(MainContent);
