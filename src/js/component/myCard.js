import React from "react";

export function MyCard(texto) {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card">
				<img
					className="card-img-top"
					src="https://via.placeholder.com/500x325"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">{texto}</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Find Out more!
					</a>
				</div>
			</div>
		</div>
	);
}
