import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class CustomerForm extends React.Component {
	renderError({ touched, error }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderField = (fieldProps) => {
		const { label, input, meta } = fieldProps;
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				<div>{this.renderError(meta)}</div>
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<div className="h1 py-4">{this.props.formHeader}</div>
				<div className="ui form">
					<Field name="firstName" component={this.renderField} label="First Name" />
					<Field name="lastName" component={this.renderField} label="Last Name" />
					<Field name="email" component={this.renderField} label="Email" />
				</div>
				<div className="pt-4">
					<button className="btn btn-primary">{this.props.formSubmitButtonLabel}</button>
				</div>
				<div className="pt-4">
					<Link to="/">Back to list</Link>
				</div>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.firstName) {
		errors.firstName = 'You must enter first name';
	}

	if (!formValues.email) {
		errors.email = 'You must enter email';
	}

	return errors;
};

export default reduxForm({
	form: 'customerForm',
	validate,
})(CustomerForm);
