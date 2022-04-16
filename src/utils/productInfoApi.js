import axios from 'axios';

const headers = {
  Authorization: process.env.GITHUB_API_KEY,
};

const getAllProducts = () => axios.get(`${process.env.URL}products`, { headers });
const getCart = () => axios.get(`${process.env.URL}cart`, { headers });

export { getAllProducts, getCart };
