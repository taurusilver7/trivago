import dashboard from "../images/dashboard.png";
import memoryimg from "../images/memory.png";

import brand1 from "../images/brand1.png";
import brand2 from "../images/brand2.png";
import brand3 from "../images/brand3.png";
import brand4 from "../images/brand4.png";
import brand5 from "../images/brand5.png";

import place1 from "../images/img1.webp";
import place2 from "../images/img2.webp";
import place3 from "../images/img3.webp";
import place4 from "../images/img4.webp";
import place5 from "../images/img5.jpg";
import place6 from "../images/img6.webp";
import place7 from "../images/img7.webp";
import place8 from "../images/img8.webp";
import place9 from "../images/img9.webp";
import place10 from "../images/img10.webp";

import standardicon from "../images/standardicon.png";
import preminumicon from "../images/preminum.png";
import checkbox from "../images/checkbox.svg";
import uncheckbox from "../images/uncheckbox.svg";

import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";

import banner from "../images/banner.webp";

export const brands = [
	{ iconSrc: brand1 },
	{ iconSrc: brand2 },
	{ iconSrc: brand3 },
	{ iconSrc: brand4 },
	{ iconSrc: brand5 },
];

export const navlinks = [
	{ link: "Home", id: "home" },
	{ link: "About", id: "about" },
	{ link: "Explore", id: "explore" },
	{ link: "Pricing", id: "pricing" },
	{ link: "Contact", id: "contact" },
];

export const hero = {
	title: "Its a Giant World",
	subtitle: "Go, Explore.",
	text: "We provide your dream places. We make our customers satisfied by providing multiple choices.",
	btn1: "Get Started",
	btn2: "Get Demo",
	img: dashboard,
};

export const memory = {
	title: "Sweet Memories",
	subtitle: "Come back To Life.",
	text: "What we have always taken care for 10 years is always prioritizing the comfort of our users. So, do not our quality.",
	img: memoryimg,
	experience: [
		{ number: "10", title: "Year Experience" },
		{ number: "400", title: "Collaborators" },
		{ number: "30K+", title: "Happy Customer" },
	],
};

export const placesAPI = [
	{ placeImg: place1, location: "Hyderabad", distance: "3 hour drive" },
	{ placeImg: place2, location: "Ahmedabad", distance: "5.5 hour drive" },
	{ placeImg: place3, location: "Nagpur", distance: "4.7 hour drive" },
	{ placeImg: place4, location: "Shiridi", distance: "4 hour drive" },
	{ placeImg: place5, location: "Chennai", distance: "6 hour drive" },
	{ placeImg: place6, location: "Kochi", distance: "6.5 hour drive" },
	{ placeImg: place7, location: "Kolkata", distance: "8.5 hour drive" },
	{ placeImg: place8, location: "Visakhapatnam", distance: "5 hour drive" },
	{ placeImg: place9, location: "Jaipur", distance: "10 hour drive" },
	{ placeImg: place10, location: "Mumbai", distance: "5 hour drive" },
];

export const pricingapi = {
	title: "Choose The Plan That Suits You",
	text: "Many attractive offers by becomming a premium member",
	btn1: "Monthly",
	btn2: "Yearly",
	plans: [
		{
			planicon: standardicon,
			title: "Standard Membership",
			text: "Suitable for all users",
			plantype: "Free / Year",
			plancontent: [
				{ iconbox: checkbox, text: "Find Popular Destination" },
				{ iconbox: checkbox, text: "Priority Booking Schedule" },
				{ iconbox: checkbox, text: "Daily Destination News" },
				{ iconbox: uncheckbox, text: "Invite Friends Feature" },
				{ iconbox: uncheckbox, text: "Limited Travel Stats" },
				{ iconbox: uncheckbox, text: "Invite Friends Feature" },
				{ iconbox: uncheckbox, text: "No Ads & Tax" },
			],
			buttonText: "Get Free",
		},
		{
			planicon: preminumicon,
			title: "Preminum Membership",
			text: "Suitable for enthusiast travelers",
			plantype: "₹6000 / Year",
			plancontent: [
				{ iconbox: checkbox, text: "Find Popular Destination" },
				{ iconbox: checkbox, text: "Priority Booking Schedule" },
				{ iconbox: checkbox, text: "Daily Destination News" },
				{ iconbox: checkbox, text: "Invite Friends Feature" },
				{ iconbox: checkbox, text: "Advanced Travel Stats" },
				{ iconbox: checkbox, text: "Invite Friends Feature" },
				{ iconbox: checkbox, text: "No Ads & Tax" },
			],
			buttonText: "Get Started",
		},
	],
};

export const bannerAPI = {
	title: "The Great Outdoors",
	text: "Whislist Curated By Trivago.",
	imgSrc: banner,
	btnText: "Explore More",
};

export const footerAPI = {
	titles: [{ title: "About" }, { title: "Company" }, { title: "Support" }],
	links: [
		[
			{ link: "About US" },
			{ link: "Features" },
			{ link: "News" },
			{ link: "Menu" },
		],
		[
			{ link: "Why Trivago?" },
			{ link: "Partner with Us" },
			{ link: "FAQ" },
			{ link: "Blog" },
		],
		[
			{ link: "Account" },
			{ link: "Support Center" },
			{ link: "Feedback" },
			{ link: "Contact Us" },
			{ link: "Accesbility" },
		],
	],
	sociallinks: [
		{ icon: facebook },
		{ icon: instagram },
		{ icon: twitter },
		{ icon: youtube },
	],
};
