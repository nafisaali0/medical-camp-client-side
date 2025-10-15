import { Link } from "react-router-dom";
import logo from '../../assets/images/logo/logo_footer.png'

const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-textDark text-[#ffff] p-10">
                <aside>
                    <figure>
                        <Link to="/">
                            <img
                                className="w-24"
                                src={logo}
                                alt="logo" />
                        </Link>
                    </figure>
                    <p className="w-80">
                        Our medical campaign website aims to make healthcare accessible for everyone by organizing free checkups, blood donation drives, and health awareness events.
                        <br />
                        <a href="#home">
                            <button className="navBtn mt-5 capitalize">
                                ↑ Back To Top
                            </button>
                        </a>
                    </p>
                </aside>
                <nav>
                    <h6 className="text-primaryDark font-bold mb-[0.5rem]">Services</h6>
                    <a className="link link-hover">Health Checkups</a>
                    <a className="link link-hover">Blood Donation</a>
                    <a className="link link-hover">Medical Camps</a>
                    <a className="link link-hover">Doctor Consult</a>
                    <a className="link link-hover">Health Awareness</a>
                    <a className="link link-hover">Emergency Care</a>
                </nav>
                <nav>
                    <h6 className="text-primaryDark font-bold mb-[0.5rem]">Site Map</h6>
                    <a href="/" className="link link-hover">Home</a>
                    <a href="/available-camps" className="link link-hover">Camps</a>
                    <a href="/dashboard" className="link link-hover">Dashboard</a>
                    <a href="" className="link link-hover">Camps Details</a>
                    <a href="" className="link link-hover">Registration</a>
                    <a href="" className="link link-hover">Payment</a>
                </nav>
                <nav>
                    <h6 className="text-primaryDark font-bold mb-[0.5rem]">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal bg-primaryDark footer-center text-[#ffff] p-4">
                <aside>
                    <p>© {new Date().getFullYear()} - All right reserved by <span className="text-textDark font-semibold">Amelia Medical Campaign</span></p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;