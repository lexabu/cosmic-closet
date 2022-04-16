import axios from 'axios';

const headers = {
  Authorization: process.env.GITHUB_API_KEY,
};

const getAllProducts = () => {
  console.log('👀 getAllProducts...');
  return axios.get(`${process.env.URL}products`, { headers });
};
const getCart = () => {
  console.log('👀 getCart...');
  return axios.get(`${process.env.URL}cart`, { headers });
};

export { getAllProducts, getCart };
