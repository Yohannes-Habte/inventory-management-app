import axios from 'axios';
import { API } from '../security/secreteKey';


// =================================================
// Get user login status
// =================================================
export const getLoginStatus = async () => {
  const response = await axios.get(`${API}/auths/loginStatus`);
  return response.data;
};