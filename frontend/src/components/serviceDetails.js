import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import ServiceData from "../data/services.json";

function ServiceDetails() {
  const { id } = useParams();

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
        {id}
        {ServiceData.map((service) => {
          if (service.id == newId) {
            return (
              <div>
                {service.full_description}

                <div>{typeof newId}</div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default ServiceDetails;
