import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

const getClassNameForRow = (isHeaderRow) => {
	let classNames = 'col-3 border-bottom text-center';

	if (isHeaderRow) {
		return `${classNames} border-top py-3 header-text bg-success table-header-text`;
	}

	return `${classNames} py-1`;
};

const renderColumn = (columnValue, isHeaderRow, id, onDeleteHandler) => {
	if (isHeaderRow || !id) {
		return <div className={getClassNameForRow(isHeaderRow)}>{columnValue}</div>;
	} else if (id) {
		return (
			<div className={getClassNameForRow(isHeaderRow)}>
				<Link to={`/customer/update/${id}`} className="btn btn-primary">
					Update
				</Link>
				{' | '}
				<Link
					className="btn btn-danger"
					to={`/customer/delete/${id}`}
					onClick={onDeleteHandler}
				>
					Delete
				</Link>
			</div>
		);
	}
};

const TableRow = (props) => {
	const { firstName, lastName, email, isHeaderRow, index, id, action, onDeleteHandler } = props;
	return (
		<div className={`row ${index % 2 === 1 ? 'table-row' : ''}`}>
			{renderColumn(firstName, isHeaderRow)}
			{renderColumn(lastName, isHeaderRow)}
			{renderColumn(email, isHeaderRow)}
			{renderColumn(action, isHeaderRow, id, onDeleteHandler)}
		</div>
	);
};

export default TableRow;
