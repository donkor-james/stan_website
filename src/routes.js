import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";
import ServiceDetails from "./components/serviceDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/service-details/:id/:title"
          element={<ServiceDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
