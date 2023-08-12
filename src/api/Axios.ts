import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URI;

export default axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});