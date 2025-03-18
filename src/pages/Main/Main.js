import Home from "./home/Home"
import About from "./about/About";
import Courses from "./courses/Courses";
import Divider from "../../components/Divider";
import Pricing from "./pricing/Pricing";
import Testimony from "./testimony/Testimony";
import Contact from "./contact/Contact";
import NavBar from "../../router/Navbar";

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