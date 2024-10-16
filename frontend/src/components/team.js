import React from "react";
import single from "../images/single.jpg";

const Team = () => {
  return (
    <section className="key-employees bg-[#F7F7F7] py-10 px-20">
      <h2 className="text-4xl text-center font-bold">
        Our <span className="span mb-2">Team</span>
      </h2>
      <div className="text-center mb-8 text-gray-600">
        Meet the Faces Behind Our Exceptional Services
      </div>
      <div className="employee-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-5 mt-8 mb-10">
        <div className="employee-card h-80 bg-white p-3 md:px-5 rounded shadow-md">
          <img
            src={single}
            alt="Employee 1"
            className="w-full h-48 object-cover rounded-t-md"
          />
          <h3 className="text-lg mt-2">John Doe</h3>
          <p className="text-gray-600">CEO</p>
        </div>
        <div className="employee-card bg-white p-4 rounded shadow-md">
          <img
            src="employee2.jpg"
            alt="Employee 2"
            className="w-full h-40 object-cover rounded-t-md"
          />
          <h3 className="text-lg mt-2">John Doe</h3>
          <p className="text-gray-600">COO</p>
        </div>
        <div className="employee-card bg-white p-4 rounded shadow-md">
          <img
            src="employee3.jpg"
            alt="Employee 3"
            className="w-full h-40 object-cover rounded-t-md"
          />
          <h3 className="text-lg mt-2">John Doe</h3>
          <p className="text-gray-600">CTO</p>
        </div>
        <div className="employee-card bg-white p-4 rounded shadow-md">
          <img
            src="employee3.jpg"
            alt="Employee 4"
            className="w-full h-40 object-cover rounded-t-md"
          />
          <h3 className="text-lg mt-2">John Doe</h3>
          <p className="text-gray-600">CTO</p>
        </div>
        <div className="employee-card bg-white p-4 rounded shadow-md">
          <img
            src="employee.jpg"
            alt="Employee 5"
            className="w-full h-40 object-cover rounded-t-md"
          />
          <h3 className="text-lg mt-2">John Doe</h3>
          <p className="text-gray-600">CTO</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
