import React from "react";

const Memory = ({ memory:{title, subtitle, img, text, experience} }) => {
	// console.log(memory);
	return (
		<div>
			<div>
				<div>
					<img src={img} alt="memory_img" className="" />
				</div>
				<div>
					<h1>{title}</h1>
					<h1>{subtitle}</h1>
					<p>{text}</p>
               <div></div>
				</div>
			</div>
		</div>
	);
};

export default Memory;
