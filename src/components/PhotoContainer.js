import React from 'react';

//Component imports
import Photo from './Photo';
import ImageNotFound from './ImageNotFound';

// Destructuring needed props
const PhotoContainer = ({data, loading}) => {
  const results = data;
  let photos;
 

  //Loading indicator. Only shown while data is being fetched
  if( loading ) {
    return (
      <h2>Loading.....</h2>
    );
  }

  //Check if search returned any data and map over results
  if( results.length > 0 ) {
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
  } else (
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