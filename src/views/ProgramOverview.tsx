import React from "react";
import heroimg from "../assets/heroimg.png";
import Bgimg from "../assets/Background.jpg";
import "../index.css";
import MS from "../assets/MS.png";
import Google from "../assets/Google.png";
import Uber from "../assets/Uber.png";
import accent from "../assets/accent.png";
import Deloite from "../assets/Deloite.png";

const constants = [
	{ logo: MS },
	{ logo: accent },
	{ logo: Google },
	{ logo: Uber },
	{ logo: Deloite },
];

const ProgramOverview = () => {
	return (
		<>
			<div
                className="d-flex"
				style={{
					backgroundImage: `url(${Bgimg})`,
					height: "830px",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="container d-flex align-items-center">
					<div className="col-6 d-flex row align-content-center">
						<h1 className="display-3 text-light">
							<strong>Advance Digital Marketing</strong>
						</h1>
						<p className="mb-3 text-light">
							{" "}
							Master digital marketing across various platforms with this online course. Learn core principles of SEO, social media, email, and content marketing to develop and implement effective campaigns. Gain the skills to execute a winning digital marketing strategy by the end of the course.
						</p>
					</div>
					<div className="col-6">
						<img src={heroimg} alt="image" />
					</div>
				</div>
			</div>

			<div className="col-12 d-flex gap-4 flex-wrap align-items-center justify-content-around mb-5" style={{ height: "140px" }}>
				{constants.map((data, idx) => {
					return (
						<img src={data.logo} alt='digitalmarketing'/>
					);
				})}
			</div>
		</>
	);
};

export default ProgramOverview;
