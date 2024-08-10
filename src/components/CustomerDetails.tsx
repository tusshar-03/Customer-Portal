import React, { useState, useEffect } from 'react';
import { Customer } from '../types/Customer';
import PhotoGrid from './PhotoGrid';
import { fetchPhotos } from '../services/api';

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchAndSetPhotos = async () => {
      const photos = await fetchPhotos();
      setPhotos(photos);
    };
    fetchAndSetPhotos();

    const interval = setInterval(() => {
      fetchAndSetPhotos();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <h4>{customer.title}</h4>
      <p>{customer.address}</p>
      <PhotoGrid photos={photos} />
    </div>
  );
};

export default CustomerDetails;
