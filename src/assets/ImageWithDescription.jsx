import React from 'react';

const ImageWithDescription = ({ original, thumbnail, description }) => {
  return (
    <figure>
      <img src={original} alt={description} />
      <figcaption>{description}</figcaption>
    </figure>
  );
};

export default ImageWithDescription;