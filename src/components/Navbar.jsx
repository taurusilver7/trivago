import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import menu from "../images/menu.svg";
import Popup from "./Popup";

const Navbar = ({ navlinks }) => {
	const [popupState, setPopupState] = useState(false);

	const onTrigger = () => setPopupState((prev) => !prev);

	console.log(popupState);

	return (
		<>
			<header className="flex items-center justify-center w-auto h-auto absolute top-7 left-0 right-0">
				<nav className="flex items-center justify-between trivago-container">
					<NavLink to={"/"} className="flex items-center">
						<img
							src={logo}
							alt="logo/img"
							className="w-22 h-10 object-fit"
						/>
					</NavLink>
					<ul className="flex items-center lg:hidden gap-7">
						{navlinks.map((val, index) => (
							<li key={index} className="text-lg text-slate-900">
								<NavLink className="" to={"#"}>
									{val.link}
								</NavLink>
							</li>
						))}
					</ul>

					<ul className="flex items-center lg:hidden">
						<li>
							<button
								type="button"
								className="btn button-emerald px-7 text-base py-1"
							>
								Join us
							</button>
						</li>
					</ul>

					<ul className="hidden lg:flex items-center">
						<li>
							<button
								type="button"
								className="flex items-center justify-center transition-all duration-200 active:scale-90"
								onClick={onTrigger}
							>
								<img
									src={menu}
									alt="menu/svg"
									className="object-cover shadow-sm filter"
								/>
							</button>
						</li>
					</ul>
				</nav>
			</header>
			<Popup navlinks={navlinks} popupState={popupState} />
		</>
	);
};

export default Navbar;
