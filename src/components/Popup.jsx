import React from "react";
import { NavLink } from "react-router-dom";

const Popup = ({ navlinks, popupState }) => {
	return (
		<>
			<nav
				className={`fixed top-14 right-12 bg-white bg-opacity-70 z-50 backdrop-filter backdrop-blur-md rounded-lg h-auto py-5 px-6 hidden lg:flex items-center justify-center transition-transform duration-300 ${
					popupState ? "lg:showpopup" : "lg:nopopup"
				}`}
			>
				<ul className="flex items-center flex-col gap-3">
					{navlinks.map((val, index) => (
						<li key={index}>
							<NavLink to={"#"}>{val.link}</NavLink>
						</li>
					))}
					<li>
						<button
							type="button"
							className="btn button-light shadow-slate-200 sm:w-auto"
						>
							Join us
						</button>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Popup;
