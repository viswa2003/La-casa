import React from 'react';
import './NotFound.css'; // Import the CSS file

const NotFound = () => {
  
  return (
    <div className="error-container">
      <h1 className="error-heading">404 Error!!!</h1>

      <img
        src="https://www.desicomments.com/user/2008/02/5418/error.gif"
        alt="Funny GIF"
        className="error-image"
      />

    </div>
  );
};

export default NotFound;
