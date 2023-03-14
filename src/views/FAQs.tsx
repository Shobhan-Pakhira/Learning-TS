import React from "react";
import wave from "../assets/testimonialbg.png";
import stars from "../assets/rating.png";

type FAQsItems = {
	question: string;
	answer: string;
};

const FAQsData = [
	{
		question:
			"What is Digital Marketing?",
		answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
	},
	{
		question:
			"Who will be my mentors?",
		answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
	},
	{
		question:
			"What Qualifications do i need?",
		answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
	},
    {
		question:
			"What can i expect from this course?",
		answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
	},
];

const FAQs = () => {
	return (
		<div
			className="container-fluid 100vh p-0 d-flex align-items-center justify-content-center"
			style={{ height: "550px" }}
		>
			<div
				className="bg-light rounded-5"
				style={{ height: "390px", width: "970px" }}
			>
				<div className="text-center mt-4 mb-4">
					<h1 className="display-5">
						<strong>FAQs</strong>
					</h1>
				</div>
                <div className=" container d-flex col flex-wrap justify-content-center px-5">
                    {FAQsData.map((item, idx) => (
                        <div className="text-left me-4 mb-4" style={{ width: "400px"}}>
                            <h5 className="mb-2 mt-2 p-0" style={{fontSize:"20px"}}><strong>{item.question}</strong></h5>
                            <p style={{fontSize:"15px"}}>{item.answer}</p>
                        </div>
                    ))}
                </div>
			</div>
		</div>
	);
};

export default FAQs;