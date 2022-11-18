import React from "react";

const Memory = ({ memory: { title, subtitle, img, text, experience } }) => {
	// console.log(memory);
	return (
		<div className="relative my-16 md:mb-7">
			<div className="trivago-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse">
				<div className="flex items-center justify-start lg:justify-center w-full max-w-md">
					<img
						src={img}
						className="w-auto object-fill h-[55vh]"
						alt="memory_img"
					/>
				</div>
				<div className="grid max-w-2xl lg:text-center items-center w-full">
					<h1 className="nav-heading">{title}</h1>
					<h1 className="nav-heading">{subtitle}</h1>
					<p className="text-base my-5 sm:text-sm">{text}</p>
					<div className="grid items-center grid-cols-3 gap-7 xl:gap-3">
						{experience?.map((exp, index) => (
							<div
								key={index}
								className="bg-gradient-to-b from-emerald-300 to-green-300 shadow-lg shadow-emerald-200 flex items-center justify-center flex-col py-7 px-5 rounded-lg text-slate-900 filter cursor-pointer hover:scale-105 transition-all duration-400"
							>
								<h1 className="text-3xl xl:text-2xl sm:text-xl font-bold drop-shadow-lg">
									{exp.number}
								</h1>
								<p className="text-lg xl:text-base sm:text-sm xs:text-xs font-medium">
									{exp.title}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Memory;
