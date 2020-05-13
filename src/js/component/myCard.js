import React from "react";

export function MyCard() {
	return (
		<div className="card mx-3">
			<img
				className="card-img-top"
				src="https://via.placeholder.com/500x325"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
