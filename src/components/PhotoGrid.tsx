import React from 'react';

interface PhotoGridProps {
  photos: string[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="photo-grid">
      {photos.map((url, index) => (
        <img key={index} src={url} alt={`photo-${index}`} />
      ))}
    </div>
  );
};

export default PhotoGrid;
