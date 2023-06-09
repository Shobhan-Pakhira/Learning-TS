import React from "react";
import "../index.css"
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
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="container d-flex align-items-center">
					<div className="col-6 d-flex row align-content-center">
						<h1 className='hero-heading'>
							Why YTS
						</h1>
						<p className="mb-3 sub-text">
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

		</>
	);
};

export default DigitalMarketing;
