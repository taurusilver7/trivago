import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { hero } from "./data/travigo-data";

function App() {
	return (
		<div className="">
			<Navbar />
			<Hero hero={hero} />
			<Footer />
		</div>
	);
}

export default App;
