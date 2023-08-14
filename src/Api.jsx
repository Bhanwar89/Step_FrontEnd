import axios from 'axios';

const API_BASE_URL = 'http://207.180.212.35/engine/users';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, `username=${email}&password=${password}`, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signup = async (email, password, firstName, lastName) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
