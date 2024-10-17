import React from "react";
import { useParams, useLocation } from "react-router-dom";
import ServiceData from "../data/services.json";
import Navbar from "./navbar";
import Footer from "./footer";

function ServiceDetails() {
  // const [detail, setDetail] = useState("");

  const { id, title } = useParams();

  const newId = Number(id);
  // const service = useNavigate().location.state;
  const location = useLocation();
  // const service = location.state;

  // if (!service) {
  //   return <div>Service not found</div>;
  // }

  // const service = ServiceData.filter((service) => service.id === id);
  // const ServiceData2 = ServiceData;

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <section className="text-white p-10 text-center relative detailed-hero">
            <div
              className="bg-center"
              style={{
                backgroundImage: "url(./header.png)",
              }}
            >
              <div className="flex items-center justify-center md:mt-32 mt-24">
                <h1 className="hero-header text-4xl md:text-5xl font-bold">
                  {title}
                </h1>
              </div>
            </div>
          </section>
        </div>
        {/* <div>{title}</div> */}
        <div className="">
          {ServiceData.map((service) => {
            if (service.id == newId) {
              return (
                <div>
                  <h2 className="mt-10 mb-3 md:mx-16 mx-8 text-3xl font-bold">
                    Our <span className="span">{service.title}</span> Service
                  </h2>
                  <div className="bg-white shadow-md md:mx-16 mx-6 text-left py-5 px-4">
                    <div className="text-gray-600">
                      {service.full_description}
                      <div>{typeof newId}</div>
                    </div>
                  </div>
                  <button className="md:mx-16 mx-8 mt-8 px-6 py-3 md:py-3 text-center bg-yellow-500 rounded">
                    Book Us Now
                  </button>
                </div>
              );
            }
          })}
        </div>
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ServiceDetails;
