import React from 'react';
import { connect } from 'react-redux';
import CustomerForm from './CustomerForm';
import { saveCustomer } from '../actions';

class AddCustomer extends React.Component {
	onFormSubmit = (formValues) => {
		this.props.saveCustomer(formValues);
	};

	render() {
		return (
			<CustomerForm
				formSubmitButtonLabel="Save"
				formHeader="Save a customer"
				onSubmit={this.onFormSubmit}
			/>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		saveCustomer: (formValues) => saveCustomer(dispatch, formValues),
	};
};

export default connect(null, mapDispatchToProps)(AddCustomer);
