import React from 'react';

//destructuring needed props for Flikr image url
const Photo = ({ farm, server, id, secret, title }) => (
  <li>
    {/* URL format https://www.flickr.com/services/api/misc.urls.html */}
    <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_q.jpg`} alt={title} />
  </li>
);

export default Photo;
