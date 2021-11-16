import React from 'react';
import { Link } from 'react-router-dom';

import './ErrorPage.scss';

const ErrorPage = (props) => {
  return (
    <div className="error-page">
      <h1 className="error-header">Oops!</h1>
      <p className="error-msg">Guru Meditation Time...</p>
      <Link className="error-link" to={'/'}>
        <i className="icon-home"></i> Return Home
      </Link>
    </div>
  );
};

export default ErrorPage;
