import axios from 'axios'

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5fb3ea3b8178a281ee704f9b';

export default axios.create({
  baseURL: BASE_URL,
  headers: {'app-id': APP_ID }
});