import { mockProductCategories } from '../data/product-categories';

export const getProductCategoryById = (id) => {
  const productCategories = mockProductCategories.results;
  const {data} = productCategories.find(productCategory => productCategory.id === id);
  return data;
};