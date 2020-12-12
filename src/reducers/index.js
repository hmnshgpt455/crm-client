import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import customersReducer from './customersReducer';
import selectedCustomerReducer from './selectedCustomerReducer';

export default combineReducers({
	customers: customersReducer,
	selectedCustomer: selectedCustomerReducer,
	form: formReducer,
});
