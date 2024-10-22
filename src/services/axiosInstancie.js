import axios from 'axios'

const axiosInstancie = axios.create({
	baseURL: 'http://localhost:8080',
})

//! añadir interceptores

export default axiosInstancie
