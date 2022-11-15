import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo2.png";

const Navbar = () => {
	return (
		<header>
			<nav>
				<NavLink to={"/"} className="">
					<img src={logo} alt="logo/img" className="" />
				</NavLink>
				<ul>
					<li>
						<NavLink to={"#"}>Home</NavLink>
					</li>
				</ul>

				<ul>
					<li><button type="button">Join us</button></li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
