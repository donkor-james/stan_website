import React, { useState } from "react";
import { Link } from "react-router-dom";
import family from "../images/fl.jpg";
import single from "../images/single.jpg";
import growth from "../images/grth.jpg";
import planning from "../images/fm.jpg";
import Navbar from "./navbar";
import Footer from "./footer";
import Faq from "./faq";
import Team from "./team";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setShowAlert(true);
        setSuccess(true);
        setEmail("");

        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      } else {
        setSuccess(false);
        setShowAlert(true);
        setEmail("");

        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
        // alert("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccess(false);
      setShowAlert(true);
      setEmail("");

      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      console.log(error);
      // alert("Subscription failed. Please try again.");
    }
  };

  return (
    <>
      <div>
        <Navbar />
        {/* Hero Section */}
        <section className="text-white p-10 text-center relative hero">
          <div
            className="bg-center"
            style={{
              backgroundImage: "url(./header.png)",
            }}
          >
            <div className="flex items-center justify-center md:mt-28 mt-16">
              <div>
                <h1 className="hero-header text-4xl md:text-5xl font-bold">
                  EMPOWERING YOUR PROSPERITY
                </h1>
                <p className="mt-4 text-xl lg:mx-44 md:mx-4">
                  Transforming lives and businesses through expert financial
                  guidance, strategic planning, and business optimization
                  solutions.
                </p>
                <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Our Services Section */}
        <section className="p-10 text-center mt-8 mx-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Our <span className="span">Services</span>
          </h2>
          <div className="text-gray-600">
            Expert Solutions for Your Financial, Personal, and Professional
            Growth
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Service Card 1 */}
            <div className="flex flex-col items-center border p-4 rounded shadow">
              <img
                src={family}
                alt="Family Life Management"
                className="w-32 h-32 object-cover rounded-t"
              />
              <h3 className="font-semibold mt-2">Family Life Management</h3>
              <p className="text-gray-600 text-center">
                Tailored strategies for navigating challenges, fostering
                communication, and strengthening family bonds.
              </p>
              {/* <button className="mt-2 bg-yellow-500 text-black px-3 py-1 rounded">
                Learn More
              </button> */}
            </div>
            {/* Service Card 2 */}
            <div className="flex flex-col items-center border p-4 rounded shadow">
              <img
                src={growth}
                alt="Business Growth Consulting"
                className="w-32 h-32 object-cover rounded-t"
              />
              <h3 className="font-semibold mt-2">Business Growth Consulting</h3>
              <p className="text-gray-600 text-center">
                Expert insights to enhance operational efficiency and drive
                sustainable growth.
              </p>
              {/* <button className="xl:mt-6 md:mt-2 bg-yellow-500 text-black px-3 py-1 rounded">
                Learn More
              </button> */}
            </div>
            {/* Service Card 3 */}
            <div className="flex flex-col items-center border p-4 rounded shadow">
              <img
                src={planning}
                alt="company management"
                className="w-32 h-32 object-cover rounded-t"
              />
              <h3 className="font-semibold mt-2">Company Management</h3>
              <p className="text-gray-600 text-center">
                Improving operational efficiency and enhancing employee
                engagement for a productive work environment.
              </p>
            </div>
          </div>
          <Link to="/services">
            <button className="xl:mt-8 mt-7 bg-yellow-400 text-black px-6 py-3 rounded">
              View More
            </button>
          </Link>
        </section>
        {/* Why Choose Us Section */}
        <section className="about bg-gray-200 md:py-32 py-24 text-center mt-8">
          <div className="text-5xl font-bold text-gray-950 text-center mb-12">
            About Us
          </div>
          <div className="text-gray-950 leading-6 md:mx-20 mx-4">
            STAN is a leading consultancy committed to empowering individuals,
            families, and organizations to reach their full potential through
            tailored strategic solutions, leadership development, continuous
            improvement, and risk management. Our expert guidance fosters
            resilience, effective communication, and lasting relationships,
            helping clients develop emotional intelligence, achieve work-life
            balance, build stronger families and teams, and drive organizational
            success. With a collaborative approach and personalized solutions,
            we help our clients navigate challenges and achieve sustainable
            growth, enhancing overall well-being and prosperity.
          </div>
        </section>
        <div className="mt-8">
          <Team />
        </div>
        <div className="">
          <Faq />
        </div>
        {/* Newsletter Subscription Section */}
        <section className=" px-12 py-20">
          {showAlert && success ? (
            <div
              className="alert bg-white fixed top-10 right-5 px-4 py-5 rounded shadow-lg z-20"
              role="alert"
            >
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline">
                {" "}
                You have been subscribed successfully.
              </span>
              <button
                onClick={() => setShowAlert(false)}
                className="absolute top-0 right-0 p-1"
              >
                &times;
              </button>
            </div>
          ) : (
            showAlert && (
              <div
                className="alert-warning bg-red-200 border-red-600 text-red-600 border fixed top-10 right-5 px-4 py-4 rounded shadow-lg z-20"
                role="alert"
              >
                {/* <strong className="font-bold"></strong> */}
                <span className="block sm:inline">
                  Something went wrong. Try again later
                </span>
                <button
                  onClick={() => setShowAlert(false)}
                  className="absolute top-0 right-0 p-1"
                >
                  &times;
                </button>
              </div>
            )
          )}
          <h2 className="text-4xl font-bold text-center">
            Subscribe to <span className="span">Our Newletter</span>
          </h2>
          <div className="text-center mb-10 text-gray-600">
            Unlock Exclusive Content and Expert Advice
          </div>
          <form onSubmit={handleSubscribe} className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border p-2 rounded-l w-64 outline-none"
            />
            <div className="bg-yellow-400 ">
              <button type="submit" className=" px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </form>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
