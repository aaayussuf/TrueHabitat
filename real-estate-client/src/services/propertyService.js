import axios from 'axios';

const API_URL = 'https://api.example.com/properties';

export const getAllProperties = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getPropertyById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const postProperty = async (propertyData) => {
  const response = await axios.post(API_URL, propertyData);
  return response.data;
};
