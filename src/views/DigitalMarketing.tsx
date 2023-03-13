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

const DigitalMarketing = () => {
	return (
		<>
			<div
                className="d-flex"
				style={{
					backgroundImage: `url(${Bgimg})`,
					height: "830px",
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="container d-flex align-items-center">
					<div className="col-6 d-flex row align-content-center">
						<h1 className="display-1 text-light">
							<strong>Why YTS</strong>
						</h1>
						<p className="mb-3 text-light">
							{" "}
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
							repellat fugit, tempora aperiam assumenda quis cumque aliquid
							nihil in suscipit molestiae, vero libero sed minima repellendus
							doloremque ratione laboriosam earum.
						</p>
						<div className="d-flex">
							<input
								className="bg-gray border-1"
								type="text"
								placeholder="Explore More"
								style={{ width: `150px` }}
							></input>
							<button className="bg-primary rounded-2 ms-2 p-1 text-light border-0">
								Apply Now
							</button>
						</div>
					</div>
					<div className="col-6">
						<img src={heroimg} alt="image" />
					</div>
				</div>
			</div>

			<div className="col-12 d-flex gap-4 flex-wrap align-items-center justify-content-around" style={{ height: "140px" }}>
				{constants.map((data, idx) => {
					return (
						<img src={data.logo} alt='digitalmarketing'/>
					);
				})}
			</div>
		</>
	);
};

export default DigitalMarketing;
