import React from "react";
import wave from "../assets/testimonialbg.png";
import stars from "../assets/rating.png";
type TestimonialItems = {
	feedback: string;
	info: string;
	rating?: string;
    quotes?: string;
};

const TestimonialData = [
	{
		rating: stars,
		feedback:
			"In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
		info: "Clark Kent - Landing page evangelist",
	},
	{
		rating: stars,
		feedback:
			"In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
		info: "Clark Kent - Landing page evangelist",
	},
	{
		rating: stars,
		feedback:
			"In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
		info: "Clark Kent - Landing page evangelist",
	},
];

const Testimonial = () => {
	return (
		<div
			className="container-fluid 100vh m-0 d-flex align-items-center justify-content-center"
			style={{ backgroundImage: `url(${wave})`, height: "1200px" }}
		>
			<div
				className="bg-light rounded-5"
				style={{ height: "550px", width: "970px" }}
			>
				<div className="text-center mt-4">
					<h1 className="display-5">
						<strong>Know For Yourself !</strong>
					</h1>
					<h5>See what your clients say about us</h5>
				</div>
                <div className=" container d-flex col flex-wrap justify-content-center px-5 my-5">
                    {TestimonialData.map((item, idx) => (
                        <div className="text-center me-2 mb-4" style={{ width: "400px"}}>
                            <img src={item.rating} alt="rating" />
                            <p className="mb-2 mt-2 p-0" style={{fontSize:"18px"}}>{item.feedback}</p>
                            <p style={{fontSize:"14px"}}>{item.info}</p>
                        </div>
                    ))}
                </div>
			</div>
		</div>
	);
};

export default Testimonial;


                    // <div className="d-flex col justify-content-center my-5">
				    // <div className="text-center me-2" style={{ width: "400px"}}>
                    // <img src={stars} alt="rating" />
                    // <div className="d-flex row mt-2">
                    //     {/* <img src={quotes} alt="source" style={{ height:"48px", width:"85px", transform: "translateY(-10px)" }} /> */}
                    //     <p className="mb-2 p-0">In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
                    // </div>
                    // <p>Clark Kent - Landing page evangelist</p>
                    // </div>