import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableRow from './TableRow';
import Modal from './Modal';
import { fetchCustomers } from '../actions';

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCustomers: fetchCustomers.bind(undefined, dispatch),
	};
};

class CustomerList extends React.Component {
	state = { showModal: false };
	componentDidMount() {
		this.props.fetchCustomers();
	}

	onDeleteHandler = () => {
		this.setState({ showModal: true });
	};

	renderCustomerList() {
		const { customers } = this.props;
		if (customers) {
			return this.props.customers.map((customer, index) => {
				return (
					<TableRow
						{...customer}
						index={index}
						key={customer.id}
						onDeleteHandler={this.onDeleteHandler}
					/>
				);
			});
		}
	}

	render() {
		console.log(this.state);
		return (
			<div className="container pt-4 font-weight-bold">
				<div className="pb-4">
					<Link to="/cutomer/new" className="btn btn-success">
						Add a customer
					</Link>
				</div>
				<TableRow
					firstName="First Name"
					lastName="Second Name"
					email="Email"
					action="Action"
					isHeaderRow
				/>
				{this.renderCustomerList()}
				<div style={{ opacity: 1 }}>{this.state.showModal ? <Modal /> : null}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { customers: Object.values(state.customers) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
