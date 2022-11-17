import axios from 'axios';

const token = localStorage.getItem('token');

export const instance = axios.create({
  headers: token
    ? {
        Authorization: `Bearer ${token}`
      }
    : undefined
});
