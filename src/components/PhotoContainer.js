import React from 'react';

//Component imports
import Photo from './Photo';
import ImageNotFound from './ImageNotFound';

const PhotoContainer = props => {
  const results = props.data;
  let photos;
  if( results ) {
    photos = results.map(photo => 
      <Photo 
        farm={photo.farm} 
        server={photo.server} 
        secret={photo.secret}
        title={photo.title}
        id={photo.id}
        key={photo.id} 
      />
    );
  } else(
    photos = <ImageNotFound />
  )

  return (
    <div className="photo-container">
      <h2>Results:</h2>
      <ul>
        { photos }
      </ul>
    </div>
  );
}

export default PhotoContainer;