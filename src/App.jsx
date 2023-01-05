import React from "react";
import Advertise from "./components/Advertise";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Memory from "./components/Memory";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Pricings from "./components/Pricings";
import {
	hero,
	navlinks,
	memory,
	placesAPI,
	brands,
	pricingapi,
	bannerAPI,
	footerAPI,
} from "./data/travigo-data";

function App() {
	return (
		<div className="">
			<Navbar navlinks={navlinks} />
			<Hero hero={hero} />
			<Memory memory={memory} />
			<Explore title="Explore the Beauty of World" placesAPI={placesAPI} />
			<Advertise brands={brands} />
			<Pricings pricingAPI={pricingapi} />
			<Banner bannerAPI={bannerAPI} />
			<Newsletter />
			<Footer footerAPI={footerAPI} />
		</div>
	);
}

export default App;
