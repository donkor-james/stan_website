import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import axios from "axios";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <section className="text-white p-10 text-center relative contact-hero">
        <div
          className="bg-center"
          style={{
            backgroundImage: "url(./header.png)",
          }}
        >
          <div className="flex items-center justify-center md:mt-32 mt-24">
            <h1 className="hero-header text-4xl md:text-5xl font-bold">
              CONTACT US
            </h1>
          </div>
        </div>
      </section>
      <div className="mt-20">
        <div className="form md:mx-6 mx-4 max-w-xl md:mx-auto p-5 md:px-5 px-8 md:p-6 lg:p-8 rounded-lg shadow-md">
          <h2 className="mb-1 text-3xl font-bold text-gray-800">
            Get in Touch
          </h2>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-6 gap-x-4 gap-y-2">
              <div className="flex flex-col">
                <label className="text-gray-700" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="green-border px-2 py-2 rounded-lg"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="green-border px-2 py-2 rounded-lg"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-4 mt-4 md:mt-0">
              <label className="text-gray-700" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                rows={7}
                placeholder="message ..."
                className="green-border px-4 py-2 rounded-lg"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg "
            >
              Send Message
            </button>
            {success && <p>Thank you for contacting us</p>}
          </form>
        </div>
      </div>

      <div className="bg-gray-100 mt-20">
        <section className="flex flex-wrap justify-between md:px-16 px-10 py-10 gap-x-6 md:mx-20 gap-y-4">
          <div>
            <h2 className="mb-1 text-xl font-bold">Address</h2>
            <div>KNUST Campus</div>
            <div>Kumasi, Ghana</div>
          </div>
          <div>
            <h2 className="mb-1 text-xl font-bold">Call Us</h2>
            <div>+233 247 839 941</div>
            <div>+233 247 839 941</div>
            {/* <div>Kumasi, Ghana</div> */}
          </div>
          <div>
            <h2 className="mb-1 text-xl font-bold">Email Address</h2>
            <div>example@gmail.com</div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
