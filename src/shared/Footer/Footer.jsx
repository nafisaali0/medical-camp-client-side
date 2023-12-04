import { Link } from 'react-router-dom';
import icon1 from '../../assets/images/icon/facebook.svg'
import icon3 from '../../assets/images/icon/linkedin.svg'
import logo from '../../assets/images/icon/Logo1.png'



const Footer = () => {
    return (
        <>
            <footer className="bg-black">
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
                            <p>Amenia Medical Camp © 2023 - Created by Nafisa Ali</p>
                        </aside>
                        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                            <a href=""><img className='w-[30px] h-[30px] bg-white' src={icon1} alt="" /></a>
                            <a href=""><img className='w-[30px] h-[30px] bg-white' src={icon3} alt="" /></a>
                        </nav>
                    </footer>
                </div>
            </footer>
        </>
    );
};

export default Footer;