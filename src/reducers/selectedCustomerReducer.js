import { FETCH_CUSTOMER, FETCH_CUSTOMERS } from '../actions/types';

const selectedCustomerReducer = (state = null, action) => {
	switch (action.type) {
		case FETCH_CUSTOMER:
			return action.payload;
		case FETCH_CUSTOMERS:
			return null;
		default:
			return state;
	}
};

export default selectedCustomerReducer;
