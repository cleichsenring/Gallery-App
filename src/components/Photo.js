import React from 'react';


const Photo = ({
  farm,
  server,
  id,
  secret,
  title
}) => (
  <li>
    <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_q.jpg`} alt={title} />
  </li>
);

export default Photo;