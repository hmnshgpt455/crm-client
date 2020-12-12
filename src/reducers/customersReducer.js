import { FETCH_CUSTOMERS, SAVE_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from '../actions/types';
import _ from 'lodash';

const customersReducer = (state = {}, action) => {
	switch (action.type) {
		case SAVE_CUSTOMER:
		case UPDATE_CUSTOMER:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_CUSTOMER:
			return { ..._.omit(state, action.payload) };
		case FETCH_CUSTOMERS:
			return { ...state, ...mapKeys(action.payload) };
		default:
			return state;
	}
};

const mapKeys = (array) => {
	const result = {};
	array.forEach((element) => (result[element.id] = element));
	return result;
};

export default customersReducer;
