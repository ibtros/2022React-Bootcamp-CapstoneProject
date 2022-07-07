import * as productsData from '../data/products.json';

export const getProductById = (id) => {
  const products = productsData.results;
  const {data} = products.find(product => product.id === id);
  return data;
};