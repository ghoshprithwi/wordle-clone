import React from "react";

function Banner({ status, children, action, actionText }) {
	return (
		<div className={`${status} banner`}>
			{children}
			<button style={{ fontWeight: 'bold' }} onClick={action}>{actionText}</button>
		</div>
	);
}

export default Banner;
