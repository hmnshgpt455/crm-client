import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { fetchCustomer, deleteCustomer } from '../actions';
import history from '../history';

class DeleteCustomer extends React.Component {
	componentDidMount() {
		const { fetchCustomer, match } = this.props;
		fetchCustomer(match.params.id);
	}

	onYesClick = (e) => {
		const { deleteCustomer, match } = this.props;
		deleteCustomer(match.params.id);
	};

	renderActions = () => {
		return (
			<div>
				<Link to="/" className="btn btn-primary float-left">
					Cancel
				</Link>
				<button to="/" className="btn btn-danger" onClick={this.onYesClick}>
					YES
				</button>
			</div>
		);
	};

	render() {
		console.log(this.props.selectedCustomer);
		return (
			<div className="container">
				<Modal
					title="Delete customer?"
					content="Are you sure you want to delete this customer ??"
					actions={this.renderActions()}
					onDismiss={() => history.push('/')}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCustomer: (id) => fetchCustomer(dispatch, id),
		deleteCustomer: (id) => deleteCustomer(dispatch, id),
	};
};

const mapStateToProps = (state) => {
	return { selectedCustomer: state.selectedCustomer };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCustomer);
