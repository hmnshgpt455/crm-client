import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import CustomerList from './CustomerList';
import AddCustomer from './AddCustomer';
import UpdateCustomer from './UpdateCustomer';
import DeleteCustomer from './DeleteCustomer';
import history from '../history';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Router history={history}>
					<div>
						<Header />
						<Switch>
							<Route path="/" exact component={CustomerList} />
							<Route path="/cutomer/new" exact component={AddCustomer} />
							<Route path="/customer/update/:id" exact component={UpdateCustomer} />
							<Route path="/customer/delete/:id" exact component={DeleteCustomer} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
