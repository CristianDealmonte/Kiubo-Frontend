import axios from 'axios';

// Crea una URL base para la comunicación a backend
const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
});

export default clienteAxios;