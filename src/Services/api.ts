import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.unsplash.com/',
    params: {
        "client_id": 'jAy4K3nCbWPQbMup4dBdM8fOOrswVp11nIZ2Z5uapzM'
    }
})

export default api;