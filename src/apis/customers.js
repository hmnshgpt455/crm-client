import axios from 'axios';
const BASE_URL = 'http://localhost:8080/crm_system_war_exploded/api';

const customersAxios = axios.create({
	baseURL: BASE_URL,
});

export default customersAxios;
