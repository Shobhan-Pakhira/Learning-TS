import React from 'react'
import "../index.css"
import { FAQsData } from "./constants";
import heroimg from "../assets/heroimg.png";
import MS from "../assets/MS.png";
import Google from "../assets/Google.png";
import Uber from "../assets/Uber.png";
import accent from "../assets/accent.png";
import Deloite from "../assets/Deloite.png";
import sideimg from '../assets/1st.png';
import market from '../assets/marketing.png';
import feature from '../assets/perks.png';
import Money from '../assets/Money.png'

import digimarketing from '../assets/digimarketing.png'

import module1 from '../assets/module1.png'
import module2 from '../assets/module2.png'
import module3 from '../assets/module3.png'
import module4 from '../assets/module4.png'
import module5 from '../assets/module5.png'
import module6 from '../assets/module6.png'
import module7 from '../assets/module7.png'

import fundamental from '../assets/Fundamentals.png'
import guidance from '../assets/Guidance.png'
import tools from '../assets/Tools.png'
import growth from '../assets/growth.png'

import proskills from '../assets/proskills.png'
import content from '../assets/content.png'
import seo from '../assets/SEO.png'
import strategy from '../assets/strategy.png'

import tick from '../assets/tick.png'

import risk from '../assets/risk.png'
import customer from '../assets/customer.png'
import quality from '../assets/quality.png'
import noquestion from '../assets/noquestion.png'
import promise from '../assets/promise.png'

const logos = [
    { logo: MS },
    { logo: accent },
    { logo: Google },
    { logo: Uber },
    { logo: Deloite },
];

const HighlightsData = [
    {
        heading: "Digital Marketing Fundamentals",
        subtext: "Master the strategies, tools and metrics behind successful digital marketing campaigns",
        icon: fundamental
    },
    {
        heading: "Expert Guidance",
        subtext: "Learn from industry professionals with years of experience and get personalized mentorship.",
        icon: guidance
    },
    {
        heading: "Cutting-Edge Tools",
        subtext: "Gain access to the latest tools and software used by top digital marketing professionals.",
        icon: tools
    },
    {
        heading: "Professional Growth",
        subtext: "Continuously improve your skills and knowledge with ongoing support and resources for professional growth.",
        icon: growth
    }
];

const BenefitItem = [
    {
        icon: strategy,
        heading: " Strategic Planning ",
        subtext: " Develop effective digital marketing strategies and campaigns that meet business objectives. "
    },
    {
        icon: seo,
        heading: " Search Engine Optimisation (SEO) ",
        subtext: " Optimize content and websites for search engines to increase reach and traffic. "
    },
    {
        icon: content,
        heading: " Content Creation ",
        subtext: " Develop compelling content that resonates with target audiences across various platforms. "
    },
    {
        icon: proskills,
        heading: " Professional Skills ",
        subtext: " Enhance teamwork, communication, and leadership skills through collaboration on real-world projects. "
    }
];

const PerksData = [
    {
        heading: "Live industry oriented program",
        icon: tick
    },
    {
        heading: "24*7 doubt assistance",
        icon: tick
    },
    {
        heading: "10+ major projects",
        icon: tick
    },
    {
        heading: "Internship assistance",
        icon: tick
    },
    {
        heading: "Exclusive e-LEARNING content",
        icon: tick
    }
];

// const TestimonialData = [
//     {
//         rating: stars,
//         feedback:
//             "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
//         info: "Clark Kent - Landing page evangelist",
//     },
//     {
//         rating: stars,
//         feedback:
//             "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
//         info: "Clark Kent - Landing page evangelist",
//     },
//     {
//         rating: stars,
//         feedback:
//             "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
//         info: "Clark Kent - Landing page evangelist",
//     },
// ];

const MoneyBackData = [
    {
        heading: "Risk-free purchase with full refund",
        icon: risk
    },
    {
        heading: "Customer satisfaction guaranteed",
        icon: customer
    },
    {
        heading: "Quality products or services",
        icon: quality
    },
    {
        heading: "No questions asked policy",
        icon: noquestion
    },
    {
        heading: "Our promise to you",
        icon: promise
    }
];

const DigiMarketing = () => {
    return (
        <>
            {/* HomePage */}
            <div
                className="d-flex"
                style={{
                    height: "830px",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="container d-flex align-items-center">
                    <div className="col-6 d-flex row align-content-center">
                        <h1 className='hero-heading text-dark'>
                            Why YTS
                        </h1>
                        <p className="mb-3 sub-text text-dark">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                            repellat fugit, tempora aperiam assumenda quis cumque aliquid
                            nihil in suscipit molestiae, vero libero sed minima repellendus
                            doloremque ratione laboriosam earum.
                        </p>
                        <div className="d-flex">
                            <input
                                className="bg-gray border-1 p-2 px-4 rounded-2"
                                type="text"
                                placeholder="Explore More"
                                style={{ width: `150px` }}
                            ></input>
                            <button className="bg-primary rounded-2 ms-2 p-2 px-4 text-light border-0">
                                Apply Now
                            </button>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={heroimg} alt="image" />
                    </div>
                </div>
            </div>

            {/* 2nd Scroll */}
            <div
                className="d-flex"
                style={{
                    height: "830px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="container d-flex align-items-center">
                    <div className="col-6 ms-5">
                        <img src={digimarketing} alt="" />
                    </div>
                    <div className="col-6 d-flex row align-content-center">
                        <h1 className='hero-heading mb-4 text-dark '>
                            Advance Digital Marketing Certification
                        </h1>
                        <p className="mb-3 sub-text text-dark ">
                            {" "}
                            Master digital marketing across various platforms with this online course. Learn core principles of SEO, social media, email, and content marketing to develop and implement effective campaigns. Gain the skills to execute a winning digital marketing strategy by the end of the course.
                        </p>
                    </div>
                </div>
            </div>

            {/* 3rd Scroll */}
            <div className='container mt-5' style={{ height: 'auto' }}>
                <div className='d-flex row justify-content-center'>
                    <div>
                        <h1 className='text-center hero-heading text-dark'><strong> Learning Path </strong></h1>
                        <h6 className='text-center sub-text text-dark mb-4'> Step by step path to success </h6>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-sm-12 p-4 d-flex row justify-content-center align-content-center">
                            <h2 className='infographic-head'> Module 1</h2>
                            <ul className='bullet-text'>
                                <li>Introduction to Digital Marketing</li>
                                <li>Understanding the basics of digital marketing</li>
                                <li>The importance of digital marketing in modern business</li>
                                <li>The different types of digital marketing channels</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 p-4 d-flex justify-content-center align-items-center">
                            <img src={module1} alt='sidimg' style={{ backgroundSize: "cover" }} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-sm-12 p-4 d-flex justify-content-center align-items-center">
                            <img src={module2} alt='sidimg' />
                        </div>
                        <div className="col-md-6 col-sm-12 p-4 d-flex row justify-content-center align-content-center">
                            <h2 className='infographic-head'> Module 2</h2>
                            <ul className='bullet-text'>
                                <li>Understanding the basics of SEO</li>
                                <li>Keyword research and analysis</li>
                                <li>On-page and off-page optimization techniques</li>
                                <li>Local SEO strategies</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-sm-12 p-4 d-flex row justify-content-center align-content-center">
                            <h2 className='infographic-head'> Module 3</h2>
                            <ul className='bullet-text'>
                                <li>Creating a social media strategy</li>
                                <li>Understanding different social media platforms</li>
                                <li>Building a strong social media presence</li>
                                <li>Measuring social media success</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 p-4 d-flex justify-content-center align-items-center">
                            <img src={module3} alt='sidimg' />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-sm-12 p-4 d-flex justify-content-center align-items-center">
                            <img src={module4} alt='sidimg' />
                        </div>
                        <div className="col-md-6 col-sm-12 p-4 d-flex row justify-content-center align-content-center">
                            <h2 className='infographic-head'> Module 4</h2>
                            <ul className='bullet-text'>
                                <li>Understanding email marketing</li>
                                <li>Creating an email marketing strategy</li>
                                <li>Building an email list</li>
                                <li>Crafting effective email campaign</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-sm-12 p-4 d-flex row justify-content-center align-content-center">
                            <h2 className='infographic-head'> Module 5</h2>
                            <ul className='bullet-text'>
                                <li>Understanding content marketing</li>
                                <li>Creating a content marketing strategy</li>
                                <li>Developing high-quality content</li>
                                <li>Measuring content marketing success</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 p-4 d-flex justify-content-center align-items-center">
                            <img src={module5} alt='sidimg' />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-sm-12 p-4 d-flex justify-content-center align-items-center">
                            <img src={module6} alt='sidimg' />
                        </div>
                        <div className="col-md-6 col-sm-12 p-4 d-flex row justify-content-center align-content-center">
                            <h2 className='infographic-head'> Module 6</h2>
                            <ul className='bullet-text'>
                                <li>Understanding PPC advertising</li>
                                <li>Creating a PPC strategy</li>
                                <li>Keyword research and targeting</li>
                                <li>Measuring PPC success</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-sm-12 p-4 d-flex row justify-content-center align-content-center">
                            <h2 className='infographic-head'> Module 7</h2>
                            <ul className='bullet-text'>
                                <li>Understanding digital marketing analytics</li>
                                <li>Setting up analytics tracking</li>
                                <li>Measuring campaign success</li>
                                <li>Reporting and analyzing data</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 p-4 d-flex justify-content-center align-items-center">
                            <img src={module7} alt='sidimg' />
                        </div>
                    </div>

                </div>
            </div>

            {/* 4th Scroll */}
            <div className='container-fluid d-flex '>
                <div className='d-flex col justify-content-center align-items-center'>
                        <img className='me-5' src={market} alt='market' />
                    <div>
                        <div className='mb-4'>
                            <h1 className='m-0 hero-heading text-dark'><strong> Program Highlights </strong></h1>
                            <p className='sub-text text-dark' style={{ fontSize: "18px" }}>Unlock Your Potential with Our Digital Marketing Program Highlights :</p>
                        </div>
                        <div>
                            {HighlightsData.map((item, idx) => (
                                <div key={idx} className='d-flex col align-items-start' style={{ width: "485px" }}>
                                    <div> <img src={item.icon} alt='icn' style={{ height: "48px" }} /> </div>
                                    <div className='ms-3 mb-3'>
                                        <div><strong>{item.heading}</strong></div>
                                        <div>{item.subtext}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 5th Scroll */}
            <div className='container-fluid d-flex align-items-center justify-content-center' style={{ height: "350px" }}>
                <div className='d-flex align-items-center justify-content-space-around'>
                    <div className='d-flex col'>
                        {BenefitItem.map((item, idx) => (
                            <div className='me-4' style={{ width: "290px", height: "180px" }}>
                                <div className='mb-2'><img src={item.icon} alt="icn" /></div>
                                <div>
                                    <div><strong>{item.heading}</strong></div>
                                    <div>{item.subtext}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 6th Scroll */}
            <div className=' container-fluid d-flex row 100vh'>
                <div className='d-flex col justify-content-center align-items-center'>
                    <div>
                        <div className='mb-4'>
                            <h1 className='m-0 hero-heading text-dark'><strong> Program Features</strong></h1>
                            <p className='sub-text text-dark'>Discover the Benefits of Our Program's Unique Features</p>
                        </div>
                        <div>
                            {PerksData.map((item, idx) => (
                                <div key={idx} className='d-flex col align-items-start mb-2' style={{ width: "485px" }}>
                                    <div> <img src={item.icon} alt='icn' /> </div>
                                    <div className='ms-3 '>
                                        <div className='bullet-text' style={{ fontWeight: "200" }}><strong>{item.heading}</strong></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img className='ms-5' src={feature} alt='highlights' />
                </div>
            </div>

            {/* 7th Scroll */}
            {/* <div
                className="container-fluid 100vh m-0 d-flex align-items-center justify-content-center"
                style={{ backgroundImage: `url(${wave})`, height: "1200px" }}
            >
                <div
                    className="bg-light rounded-5"
                    style={{ height: "550px", width: "970px" }}
                >
                    <div className="text-center mt-4">
                        <h1 className="hero-heading text-dark">
                            <strong>Know For Yourself !</strong>
                        </h1>
                        <h5 className='sub-text text-dark'>See what your clients say about us</h5>
                    </div>
                    <div className=" container d-flex col flex-wrap justify-content-center px-5 my-5">
                        {TestimonialData.map((item, idx) => (
                            <div className="text-center me-2 mb-4" style={{ width: "400px" }}>
                                <img src={item.rating} alt="rating" />
                                <p className="mb-2 mt-2 p-0" style={{ fontSize: "18px" }}>{item.feedback}</p>
                                <p style={{ fontSize: "14px" }}>{item.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            {/* 8th Scroll */}
            <div className=' container-fluid m-0 d-flex row 100vw' style={{ height: "720px" }}>
                <div className='d-flex col justify-content-center align-items-center'>
                    <div>
                        <h1 className='hero-heading text-dark mb-4'><strong>100% Moneyback <br />Guarantee </strong></h1>
                        <div>
                            {MoneyBackData.map((item, idx) => (
                                <div key={idx} className='d-flex col align-items-center mb-3' style={{ width: "485px" }}>
                                    <div> <img src={item.icon} alt='icn' style={{ height: "48px" }} /> </div>
                                    <div className='ms-3' style={{ fontSize: "25px", fontWeight: "500" }}>
                                        {item.heading}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img className='ms-5' src={Money} alt='market' />
                </div>
            </div>

            {/* 9th Scroll */}
            <div style={{ backgroundColor: '#1864AB' }}>
                <div className='text-center p-5'>
                    <h1 className='hero-heading m-0' style={{ fontSize: "40px" }}>Ready to get started?</h1>
                    <h5 className='sub-text'>Contact us or sign up now !</h5>
                    <div className='d-flex col justify-content-center align-items-center'>
                        <button className='p-2 my-2 me-4 rounded-1 border-0 bg-light '>Get Started</button>
                        <button className='p-2 my-2 rounded-1 border-0 bg-light '>Contact Us</button>
                    </div>
                </div>
            </div>

            {/* 10th Scroll */}
            <div
                className="container-fluid 100vh p-0 d-flex align-items-center justify-content-center"
                style={{ height: "550px" }}
            >
                <div
                    className="bg-light rounded-5"
                    style={{ height: "390px", width: "970px" }}
                >
                    <div className="text-center mt-4 mb-4">
                        <h1 className="display-5 hero-heading text-dark">
                            <strong>FAQs</strong>
                        </h1>
                    </div>
                    <div className=" container d-flex col flex-wrap justify-content-center px-5">
                        {FAQsData.map((item, idx) => (
                            <div className="text-left me-4 mb-4" style={{ width: "400px" }}>
                                <h5 className="mb-2 mt-2 p-0" style={{ fontSize: "20px" }}><strong>{item.question}</strong></h5>
                                <p style={{ fontSize: "15px" }}>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DigiMarketing;