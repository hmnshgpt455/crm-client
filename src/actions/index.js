import { FETCH_CUSTOMERS, SAVE_CUSTOMER, FETCH_CUSTOMER, DELETE_CUSTOMER } from './types';
import axiosCustomers from '../apis/customers';
import history from '../history';

export const fetchCustomers = async (dispatch) => {
	const { data } = await axiosCustomers.get('/customers');

	dispatch({
		type: FETCH_CUSTOMERS,
		payload: data,
	});
};

export const saveCustomer = async (dispatch, formValues) => {
	const { data } = await axiosCustomers.post('/customers', formValues);
	history.push('/');
	dispatch({
		type: SAVE_CUSTOMER,
		payload: data,
	});
};

export const fetchCustomer = async (dispatch, id) => {
	const { data } = await axiosCustomers.get(`/customers/${id}`);

	dispatch({
		type: FETCH_CUSTOMER,
		payload: data,
	});
};

export const updateCustomer = async (dispatch, formValues) => {
	const { data } = await axiosCustomers.put('/customers', formValues);
	history.push('/');
	dispatch({
		type: SAVE_CUSTOMER,
		payload: data,
	});
};

export const deleteCustomer = async (dispatch, id) => {
	await axiosCustomers.delete(`/customers/${id}`);
	history.push('/');
	dispatch({
		type: DELETE_CUSTOMER,
		payload: id,
	});
};
