const API_BASE_URL = 'http://192.168.43.194:3000';
const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
export const LOGIN = getApiUrl('/api/users/loginUser');
export const SIGNUP = getApiUrl('/api/users');
export const PRODUCTS = getApiUrl('/getproductImages')
