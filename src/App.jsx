import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Project from "./pages/Project";
import PageNotFound from "./pages/PageNotFound";
import Carousel from "./components/carousel/carousel";
import Service1 from "./pages/Service1";
import Service2 from "./pages/Service2";
import Service3 from "./pages/Service3";
import ScrollToTop from "./components/ScrollToTop";
import Academy from "./pages/Academy";

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/service1" element={<Service1 />} />
                <Route path="/service2" element={<Service2 />} />
                <Route path="/service3" element={<Service3 />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
