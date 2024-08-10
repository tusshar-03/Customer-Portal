import axios from 'axios';
import { Customer } from '../types/Customer'; 

const PHOTO_API_URL = 'https://api.unsplash.com/photos/random';
const ACCESS_KEY = 'LUex_CmgYX55Db12cgnMyEQq9y3GvotMuYWcf705-N8'; 

export const fetchPhotos = async (): Promise<string[]> => {
  const response = await axios.get(PHOTO_API_URL, {
    params: { count: 9 },
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  });
  return response.data.map((photo: any) => photo.urls.small);
};


const CUSTOMER_API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchCustomers = async (): Promise<Customer[]> => {
  try {
    const response = await axios.get(CUSTOMER_API_URL);
    return response.data.map((user: any) => ({
      id: user.id,
      name: user.name,
      title: user.company.bs, 
      address: `${user.address.street}, ${user.address.city}`,
    }));
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};