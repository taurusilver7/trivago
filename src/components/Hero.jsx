import React from "react";

const Hero = ({ hero: { title, subtitle, btn1, btn2, text, img } }) => {
	return (
		<>
			<div className="flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto">
				<div className="trivago-container grid items-start justify-items-center">
					<div className="grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12">
						<h1 className="nav-heading">{title}</h1>
						<h1 className="nav-heading">{subtitle}</h1>
						<p className="text-base text-center my-5 sm:text-sm">
							{text}
						</p>
						<div className="flex items-center justify-center gap-11 sm:gap-3 sm:flex-col sm:w-full">
							<button type="button" className="btn button-emerald">
								{btn1}
							</button>
							<button type="button" className="btn button-light">
								{btn2}
							</button>
						</div>
					</div>
					<div className="flex items-center justify-center mb-11">
						<img
							src={img}
							className="h-[85vh] w-full object-fill lg:h-[80vh] md:h-[57vh] sm:h-[35vh] sm:object-contain drop-shadow-emerald"
							alt="dashboard-img"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
