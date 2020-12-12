import React from 'react';
import { connect } from 'react-redux';
import CustomerForm from './CustomerForm';
import { fetchCustomer, updateCustomer } from '../actions';

class UpdateCustomer extends React.Component {
	onFormSubmit = (formValues) => {
		this.props.updateCustomer(formValues);
	};

	componentDidMount() {
		const { fetchCustomer, match } = this.props;
		fetchCustomer(match.params.id);
	}

	render() {
		const { selectedCustomer } = this.props;
		let initialValues = null;
		if (selectedCustomer) {
			initialValues = { ...selectedCustomer };
		}
		return (
			<CustomerForm
				formSubmitButtonLabel="Update"
				formHeader="Update a customer"
				initialValues={initialValues}
				onSubmit={this.onFormSubmit}
			/>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCustomer: (id) => fetchCustomer(dispatch, id),
		updateCustomer: (customer) => updateCustomer(dispatch, customer),
	};
};

const mapStateToProps = (state) => {
	return { selectedCustomer: state.selectedCustomer };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCustomer);
