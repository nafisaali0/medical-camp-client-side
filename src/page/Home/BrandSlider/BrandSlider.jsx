import Marquee from "react-fast-marquee";
import brand1 from '../../../assets/images/brandlogo/logo1.jpg'
import brand2 from '../../../assets/images/brandlogo/logo2.jpg'
import brand3 from '../../../assets/images/brandlogo/logo8.jpg'
import brand4 from '../../../assets/images/brandlogo/logo9.jpg'
import brand5 from '../../../assets/images/brandlogo/logo10.jpg'
import brand6 from '../../../assets/images/brandlogo/logo11.jpg'
import brand7 from '../../../assets/images/brandlogo/logo12.jpg'
import brand8 from '../../../assets/images/brandlogo/logo13.jpg'
import HomeTitle from "../../../components/HomeTitle";


const BrandSlider = () => {
    return (
        <>
            <div className="mx-auto overflow-hidden container my-20 p-5">
                <div className="my-10">
                    <HomeTitle title="Our Partners"></HomeTitle>
                </div>
                <div className="bg-blue-200">
                    <Marquee>
                        <img className="w-[200px] h-[200px]" src={brand1}></img>
                        <img className="w-[200px] h-[200px]" src={brand2}></img>
                        <img className="w-[200px] h-[200px]" src={brand3}></img>
                        <img className="w-[200px] h-[200px]" src={brand4}></img>
                        <img className="w-[200px] h-[200px]" src={brand5}></img>
                        <img className="w-[200px] h-[200px]" src={brand6}></img>
                        <img className="w-[200px] h-[200px]" src={brand7}></img>
                        <img className="w-[200px] h-[200px]" src={brand8}></img>
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default BrandSlider;