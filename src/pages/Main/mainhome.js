import Home from "./home/home.js"
import About from "./about/about.js";
import Courses from "./courses/courses.js";
import Divider from "../../components/divider.js";
import Pricing from "./pricing/pricing.js";
import Testimony from "./testimony/testimony.js";
import Contact from "./contact/contact.js";
import NavBar from "../../router/navbarhome.js";


function Main() {
    return (
        <>
            <NavBar />
            <Home />
            <Divider />
            <About />
            <Divider />
            <Courses />
            <Divider />
            <Pricing />
            <Divider />
            <Testimony />
            <Divider />
            <Contact />
         </>
    );
}

export default Main;