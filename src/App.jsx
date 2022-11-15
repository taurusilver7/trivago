import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Memory from "./components/Memory";
import Navbar from "./components/Navbar";
import { hero, navlinks, memory } from "./data/travigo-data";

function App() {
	return (
		<div className="">
			<Navbar navlinks={navlinks} />
			<Hero hero={hero} />
			<Memory memory={memory} />
			<Footer />
		</div>
	);
}

export default App;
