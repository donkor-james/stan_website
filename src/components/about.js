import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Group from "../images/group.jpg";
import Navbar from "./navbar";
import Faq from "./faq";
import Team from "./team";
import Footer from "./footer";

const About = () => {
  return (
    <>
      <div>
        <Navbar />
        {/* Hero Section */}
        <section className="text-white p-10 text-center relative about-hero">
          <div
            className="bg-center"
            style={{
              backgroundImage: "url(./header.png)",
            }}
          >
            <div className="flex items-center justify-center md:mt-32 mt-24">
              <div>
                <h1 className="hero-header text-4xl md:text-5xl font-bold">
                  ABOUT STAN INC
                </h1>
                {/* <p className="mt-4 text-xl lg:mx-44 md:mx-4">
                  Transforming lives and businesses through expert financial
                  guidance, strategic planning, and business optimization
                  solutions.
                </p> */}
                {/* <button className="mt-6 bg-yellow-500 text-black px-5 py-3 rounded">
                  Get Started
                </button> */}
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center px-8 bg-gray-200">
          <div className="hidden md:flex welcome mx-4 md:mx-8 md:mx-20 my-24 md:my-28 md:grid md:grid-cols-2  md:text-left text-center flex flex-col-reverse gap-y-4 gap-x-8">
            <div className="flex align-self-start justify-center">
              <img
                src={Group}
                alt="Stan Inc"
                className="lg:max-w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col mb-8">
              <h2 className="text-4xl font-bold pb-2 text-center text-gray-800">
                Welcome To <span className="span">STAN Inc</span>
              </h2>
              <p className="text-gray-600 leading-7 mt-3">
                STAN is a leading consultancy empowering individuals, families,
                and organizations to reach their full potential through tailored
                strategic solutions and leadership development. Our expert
                guidance fosters resilience, effective communication, and
                lasting relationships, driving success and well-being. By
                promoting emotional intelligence, work-life balance, and strong
                teams, we help clients achieve lasting impact
              </p>
            </div>
          </div>
          <div className="md:hidden welcome mx-2 md:mx-8 md:mx-20 my-24 md:my-28  md:text-left text-center gap-y-4 gap-x-8">
            <h2 className="text-4xl font-bold pb-2 text-center text-gray-800">
              Welcome To <span className="span">STAN Inc</span>
            </h2>
            <div className="flex mt-8 align-self-start justify-center">
              <img
                src={Group}
                alt="Stan Inc"
                className="lg:max-w-full rounded-lg shadow-lg"
              />
            </div>
            <p className="text-gray-600 leading-7 mt-10">
              STAN is a leading consultancy empowering individuals, families,
              and organizations to reach their full potential through tailored
              strategic solutions and leadership development. Our expert
              guidance fosters resilience, effective communication, and lasting
              relationships, driving success and well-being. By promoting
              emotional intelligence, work-life balance, and strong teams, we
              help clients achieve lasting impact
            </p>
          </div>
        </section>
        <div>
          <Team />
        </div>
        <div>
          <Faq />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
