import React from 'react';
import './Details.scss';
import Rating from '../rating/Rating';
import Tabs from './tabs/Tabs';
import Overview from './overview/Overview';
import Crew from './crew/Crew';
import Media from './media/Media';
import Reviews from './reviews/Reviews';

const Details = () => {
  return (
    <>
      <div className="movie-container">
        <div
          className="movie-bg"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg)'
          }}
        ></div>
        <div className="movie-overlay">
          <div className="movie-details">
            <div className="movie-image">
              <img src="" alt="" />
            </div>
            <div className="movie-body">
              <div className="movie-overview">
                <div className="title"></div>
                <div className="movie-generes">
                  <ul className="genres">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className="rating">
                  <Rating className="rating-stars" rating={6.5} totalStars={10} />
                  &nbsp;
                  <span>6.5</span> <p>(200) reviews</p>
                </div>
                <Tabs>
                  <div label="Overview">
                    <Overview />
                  </div>
                  <div label="Crew">
                    <Crew />
                  </div>
                  <div label="Media">
                    <Media />
                  </div>
                  <div label="Review">
                    <Reviews />
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
