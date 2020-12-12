import React from 'react';

const ModalW = () => {
	return (
		<div
			className="modal fade"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="exampleModalCenterTitle"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<div className="h5 modal-title">Title</div>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">ds</span>
						</button>
					</div>
					<div className="modal-body">This is delete modal</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">
							Close
						</button>
						<button type="button" className="btn btn-primary">
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalW;
