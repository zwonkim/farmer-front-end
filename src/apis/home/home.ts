import request from '../base';

//main banner
export const getMainBanner = async () => {
  const response = await request.get('/main/banner');
  return response.data;
};

//category
export const getProductCategory = async () => {
  const response = await request.get('/main/product-category');
  return response.data;
};

//shop by size
export const getShopBySize = async (size: string) => {
  const response = await request({
    url: '/main/product/shop-by-size',
    params: {
      size: size,
    },
  });
  return response.data;
};

//best plant
export const getBestProduct = async () => {
  const response = await request.get('/main/product/best-product');
  return response.data;
};

//best review
export const getBestReview = async () => {
  const response = await request.get('/main/review');
  return response.data;
};

//news
export const getNews = async () => {
  const response = await request.get('/main/news');
  return response.data;
};
