/* eslint-disable react/prop-types */
import React from 'react';
import './Grid.scss';

const Grid = (props) => {
  const { images } = props;

  return (
    <>
      <div className="grid">
        {images.map((image, i) => (
          <div key={i}>
            <div className="grid-cell" style={{ backgroundImage: `url(${image.url})` }}>
              <div className="grid-read-more">
                <button className="grid-cell-button">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
