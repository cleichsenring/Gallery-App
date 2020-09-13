import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="main-nav not-found">
    <h2>Page Not Found</h2>
    <Link to="/"> Return Home </Link>
    <iframe
      src="https://giphy.com/embed/jkZtSdwKOx05BOlapR"
      width="480"
      height="307"
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
      title="404 Error"
    />
    {/* <p><a href="https://giphy.com/gifs/nehumanesociety-dog-space-keyboard-jkZtSdwKOx05BOlapR">via GIPHY</a></p>*/}
  </div>
);

export default NotFound;
