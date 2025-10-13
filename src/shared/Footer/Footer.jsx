// import { Link } from 'react-router-dom';
// import icon1 from '../../assets/images/icon/facebook.svg'
// import icon3 from '../../assets/images/icon/linkedin.svg'
// import logo from '../../assets/images/icon/Logo1.png'
import { Link } from "react-router-dom";
import logo from '../../assets/images/icon/Logo-removebg.png'

const Footer = () => {
    return (
        <>
            {/* <footer className="bg-black">
                <div className="mx-auto w-full container">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Company</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <Link to={'/'} className=" hover:underline">Home</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={'/available-camps'} className=" hover:underline">Available Camps</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={'/dashboard'} className=" hover:underline">Dashboard</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={'/contact'} className=" hover:underline">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Help center</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Facebook</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">GitHub</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Licensing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Download</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">iOS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Android</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Windows</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">MacOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <footer className="footer items-center p-4 bg-black text-white border-t-2 border-[#5b608b]">
                        <aside className="items-center grid-flow-col">
                            <img className='w-[50px] h-[50px]' src={logo} alt="logo" />
                            <p>Amelia Medical Camp © 2023 - Created by Nafisa Ali</p>
                        </aside>
                        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                            <a href=""><img className='w-[30px] h-[30px] bg-white' src={icon1} alt="" /></a>
                            <a href=""><img className='w-[30px] h-[30px] bg-white' src={icon3} alt="" /></a>
                        </nav>
                    </footer>
                </div>
            </footer> */}

            {/* new */}
            <footer className="footer sm:footer-horizontal bg-textDark text-[#ffff] p-10">
                <aside>
                    {/* <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg> */}
                    <figure className="w-10">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="logo" />
                        </Link>
                    </figure>
                    <p>
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal bg-btnColor footer-center text-[#ffff] p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;