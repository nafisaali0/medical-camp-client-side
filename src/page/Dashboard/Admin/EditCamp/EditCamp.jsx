import { useForm } from "react-hook-form";
import { LuUpload } from "react-icons/lu"
import { MdOutlineUpdate } from "react-icons/md"
import { SiBasecamp } from "react-icons/si"
import useAxioslocalhost from "../../../../hooks/useAxioslocalhost";
import { useLoaderData } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { useState } from "react";
import { Bounce, Slide, toast } from "react-toastify";
import ShareHelmet from "../../../../components/ShareHelmet";

const EditCamp = () => {

    const { _id, campName, campServices, campProfessionals, campCategory, campDetails, campDate, campTime, campVenue, campAge, campGender, campFee, campImage, campCategoryImage } = useLoaderData();

    const { register, handleSubmit, reset } = useForm()
    const axiosLocalhost = useAxioslocalhost()

    // image hosting
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const [getCampImage, setGetCampImage] = useState(campImage);
    const [getCategoryImage, setGetCategoryImage] = useState(campCategoryImage);

    const handleCampImage = async (e) => {

        const file = e.target.files[0]
        const formdata = new FormData();
        formdata.append("image", file)

        const res = await axios.post(image_hosting_api, formdata);

        if (res.data.success) {
            const camp_Image = res.data.data.display_url;
            setGetCampImage(camp_Image);
        } else {
            toast.error('Unable to update image!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }

    }
    const handleCategoryImage = async (e) => {

        const file = e.target.files[0]
        const formdata = new FormData();
        formdata.append("image", file)

        const res = await axios.post(image_hosting_api, formdata);

        if (res.data.success) {
            const category_Image = res.data.data.display_url;
            setGetCategoryImage(category_Image);
        } else {
            toast.error('Unable to update image!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

        }
    }
    const onSubmit = async (data) => {

        const campDetails = {

            campCreateDate: moment().format("MMM Do YY"),
            campImage: getCampImage,
            campCategoryImage: getCategoryImage,
            campName: data.campName,
            campServices: data.campServices,
            campProfessionals: data.campProfessionals,
            campCategory: data.campCategory,
            campDetails: data.campDetails,
            campDate: data.campDate,
            campTime: data.campTime,
            campVenue: data.campVenue,
            campAge: data.campAge,
            campGender: data.campGender,
            campFee: parseFloat(data.campFee),

        }
        const campRes = await axiosLocalhost.patch(`/camp/${_id}`, campDetails);

        if (campRes.data.modifiedCount > 0) {

            reset();
            toast.success('Camp updated successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: 1,
                theme: "light",
                transition: Slide,
            });

        } else {

            toast.error('Unable to update camp!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

        }
    }

    return (
        <>

            <ShareHelmet HelmetTitle="Update Camp" />

            <div className="w-full max-w-full overflow-x-hidden">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div data-aos="fade-right" className="bg-white p-4 rounded-xl border border-borderColour">
                        <div className="flex justify-between">

                            <div className="flex items-center gap-2">
                                <SiBasecamp className="text-[22px]" />
                                <h1 className="text-textDark text-lg font-medium">Update Camp</h1>
                            </div>

                            <div>
                                <button className="flex items-center gap-2 px-3 py-2 text-xm lg:text-lg font-normal text-white bg-btnColor rounded-xl cursor-pointer">
                                    <span>
                                        <MdOutlineUpdate className="text-[16px] lg:text-[20px]" />
                                    </span>
                                    Update
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 mt-5">

                        {/* left side */}
                        <div data-aos="fade-right" className="w-auto lg:w-[700px] space-y-5">

                            {/* part one */}
                            <div className="bg-white p-4 rounded-xl border border-borderColour space-y-5">
                                <div>
                                    <h1 className="text-textDark text-lg font-medium">Generel Information</h1>
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-xm font-normal text-grayText">Camp Name</h1>
                                    <input
                                        type="text"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        required
                                        placeholder="Camp Name"
                                        defaultValue={campName}
                                        {...register("campName")}
                                        title="Health Checkup"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-xm font-normal text-grayText">Services</h1>
                                    <input
                                        type="text"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        required
                                        placeholder="Check up on pressure/diabetes"
                                        defaultValue={campServices}
                                        {...register("campServices")}
                                        title="Services"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-xm font-normal text-grayText">Healthcare Professionals</h1>
                                    <input
                                        type="text"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        required
                                        placeholder="Dr. Wasfia Rahman"
                                        defaultValue={campProfessionals}
                                        {...register("campProfessionals")}
                                        title="Healthcare Professionals Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-xm font-normal text-grayText">Category</h1>
                                    <input
                                        type="category"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        required
                                        placeholder="Heart/Cancer"
                                        defaultValue={campCategory}
                                        {...register("campCategory")}
                                        title="Category"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-xm font-normal text-grayText">Description</h1>
                                    <textarea
                                        placeholder="Description"
                                        defaultValue={campDetails}
                                        {...register("campDetails")}
                                        className="w-full h-24 p-2 text-xm font-normal outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            {/* part two */}
                            <div className="w-full bg-white p-4 rounded-xl border border-borderColour space-y-5">

                                <div>
                                    <h1 className="text-textDark text-lg font-medium">Camp Details</h1>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2">

                                    <div className="space-y-2 w-full">
                                        <h1 className="text-xm font-normal text-grayText">Date</h1>
                                        <input
                                            type="date"
                                            className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                            required
                                            placeholder="Date"
                                            defaultValue={campDate}
                                            {...register("campDate")}
                                            title="Date"
                                        />
                                    </div>
                                    <div className="space-y-2 w-full">
                                        <h1 className="text-xm font-normal text-grayText">Time</h1>
                                        <input
                                            type="time"
                                            className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                            required
                                            placeholder="Time"
                                            defaultValue={campTime}
                                            {...register("campTime")}
                                            title="Time"
                                        />
                                    </div>
                                    <div className="space-y-2 w-full">
                                        <h1 className="text-xm font-normal text-grayText">Venue</h1>
                                        <input
                                            type="location"
                                            className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText placeholder:text-xs"
                                            required
                                            placeholder="ParkHoliday,Gulshan,Dhaka"
                                            defaultValue={campVenue}
                                            {...register("campVenue")}
                                            title="Venue"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* part three */}
                            <div className="w-full bg-white p-4 rounded-xl border border-borderColour space-y-5">

                                <div>
                                    <h1 className="text-textDark text-lg font-medium">Target Group</h1>
                                </div>

                                <div className="flex items-center gap-2">

                                    <div className="space-y-2 w-full">
                                        <h1 className="text-xm font-normal text-grayText">Age</h1>
                                        <input
                                            type="age"
                                            placeholder="25-40/Adult/Child/Older"
                                            defaultValue={campAge}
                                            {...register("campAge")}
                                            title="Age"
                                            className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        />
                                    </div>
                                    <div className="space-y-2 w-full">
                                        <h1 className="text-xm font-normal text-grayText">Gender</h1>
                                        <input
                                            type="gender"
                                            placeholder="Male/Female"
                                            defaultValue={campGender}
                                            {...register("campGender")}
                                            title="Gender"
                                            className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        />
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* right side */}
                        <div data-aos="fade-left" className="w-auto flex-1 space-y-5">

                            {/* part one - campImage */}
                            <div className="p-4 w-full bg-white rounded-xl">
                                <div>
                                    <h1 className="text-textDark text-lg font-medium">Camp Media</h1>
                                </div>
                                <div className="mt-5">
                                    <h1 className="text-xm font-normal text-grayText mb-2">Image</h1>
                                    <div className="w-full h-52 border-2 border-dashed border-borderColour">
                                        <img src={getCampImage} alt="" className="w-full h-full" />
                                    </div>
                                    <div onChange={handleCampImage} className="mt-5">
                                        <label className="w-44 flex items-center gap-2 px-3 py-2 text-xm font-normal text-white bg-btnColor rounded-xl cursor-pointer" htmlFor="fileUpload">
                                            <span>
                                                <LuUpload className="text-[16px]" />
                                            </span>
                                            <input type="file" name="imageFile" className="text-white hidden" id="campImageUpload" {...register("campImage")} />
                                            <span>Upload Image</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* part two - categoryImage */}
                            <div className="p-4 w-full bg-white rounded-xl">
                                <div>
                                    <h1 className="text-textDark text-lg font-medium">Cetagory Media</h1>
                                </div>
                                <div className="mt-5">
                                    <h1 className="text-xm font-normal text-grayText mb-2">Image</h1>
                                    <div className="w-full h-48 border-2 border-dashed border-borderColour">
                                        <img src={getCategoryImage} alt="" className="w-full h-full" />
                                    </div>
                                    <div onChange={handleCategoryImage} className="mt-5">
                                        <label className="w-44 flex items-center gap-2 px-3 py-2 text-xm font-normal text-white bg-btnColor rounded-xl cursor-pointer" htmlFor="categoryImageUpload">
                                            <span>
                                                <LuUpload className="text-[16px]" />
                                            </span>
                                            <input type="file" name="campCategoryImage" className="text-white hidden" id="categoryImageUpload" {...register("campCategoryImage")} />
                                            <span>Upload Image</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* part three */}
                            <div className="w-full bg-white p-4 rounded-xl border border-borderColour space-y-5">

                                <div>
                                    <h1 className="text-textDark text-lg font-medium">Camp Price</h1>
                                </div>

                                <div>
                                    <div className="space-y-2">
                                        <h1 className="text-xm font-normal text-grayText">Enrollment Fee</h1>
                                        <input
                                            type="fee"
                                            className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                            required
                                            placeholder="200 BDT"
                                            defaultValue={campFee}
                                            {...register("campFee")}
                                            title="Enrollment Fee"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default EditCamp
