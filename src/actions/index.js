import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_ASSET = 'FETCH_ASSET';

const API_BASE_URL = ""
const API_SPACE_ID = ""
const API_TOKEN = ""



export function fetchProducts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=product&order=-sys.updatedAt`);
  // const request = contentfulClient.getEntries({content_type: 'product'})
  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}
export function fetchProduct(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries/${id}?access_token=${API_TOKEN}&content_type=product`);
  return {
    type: FETCH_PRODUCT,
    payload: request
  };
}
export function fetchAsset(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`);

  return {
    type: FETCH_ASSET,
    payload: request
  };
}
