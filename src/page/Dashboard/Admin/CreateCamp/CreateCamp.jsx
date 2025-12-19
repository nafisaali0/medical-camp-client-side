import { useForm } from "react-hook-form"
import { LuUpload } from "react-icons/lu"
import { MdLibraryAddCheck } from "react-icons/md"
import { SiBasecamp } from "react-icons/si"
import Swal from "sweetalert2"
import axios from "axios"
import useAxioslocalhost from "../../../../hooks/useAxioslocalhost"
import { useState } from "react"
import moment from "moment"


const CreateCamp = () => {

    const axiosLocalhost = useAxioslocalhost()
    const { register, handleSubmit, reset } = useForm()

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const [getCampImage, setGetCampImage] = useState(null);
    const [getCategoryImage, setGetCategoryImage] = useState(null);

    const handleCampImage = (e) => {
        setGetCampImage(URL.createObjectURL(e.target.files[0]))
    }
    const handleCategoryImage = (e) => {
        setGetCategoryImage(URL.createObjectURL(e.target.files[0]))
    }

    const onSubmit = async (data) => {

        // camp Image
        const campfile = data.campImage[0]
        const campformdata = new FormData();
        campformdata.append("image", campfile)
        const camRes = await axios.post(image_hosting_api, campformdata);

        // category Image
        const categoryfile = data.campCategoryImage[0]
        const categoryformdata = new FormData();
        categoryformdata.append("image", categoryfile)
        const categoryRes = await axios.post(image_hosting_api, categoryformdata);

        if (camRes.data.success) {

            const campDetails = {

                campCreateDate: moment().format("MMM Do YY"),
                campImage: camRes.data.data.display_url,
                campCategoryImage: categoryRes.data.data.display_url,
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
            const campPostRes = await axiosLocalhost.post('/camp', campDetails);

            if (campPostRes.data.insertedId) {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "create camp successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                reset();
            }
        } else {
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "new camp not create",
                showConfirmButton: false,
                timer: 1500
            });
        }

        // post category
        if (categoryRes.data.success) {

            const categoryDetails = {
                campCategory: data.campCategory,
                campCategoryImage: categoryRes.data.data.display_url,
            }
            const categoryPostRes = await axiosLocalhost.post('/categories', categoryDetails);

            if (categoryPostRes.data.insertedId) {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "create category successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                reset();
            }
        } else {
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "category not create",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="bg-white p-4 rounded-xl border border-borderColour">
                    <div className="flex justify-between">

                        <div className="flex items-center gap-2">
                            <SiBasecamp className="text-[22px]" />
                            <h1 className="text-textDark text-lg font-medium">Add A New Camp</h1>
                        </div>

                        <div>
                            <button className="flex items-center gap-2 px-3 py-2 text-xm lg:text-lg font-normal text-white bg-btnColor rounded-xl cursor-pointer">
                                <span>
                                    <MdLibraryAddCheck className="text-[16px] lg:text-[20px]" />
                                </span>
                                Create
                            </button>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-4 mt-5">

                    {/* left side */}
                    <div className="w-auto lg:w-[800px] space-y-5">

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

                                    placeholder="Camp Name"
                                    {...register("campName")}
                                    title="Health Checkup"
                                />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-xm font-normal text-grayText">Services</h1>
                                <input
                                    type="text"
                                    className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"

                                    placeholder="Check up on pressure/diabetes"
                                    {...register("campServices")}
                                    title="Services"
                                />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-xm font-normal text-grayText">Healthcare Professionals</h1>
                                <input
                                    type="text"
                                    className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"

                                    placeholder="Dr. Wasfia Rahman"
                                    {...register("campProfessionals")}
                                    title="Healthcare Professionals Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-xm font-normal text-grayText">Category</h1>
                                <input
                                    type="category"
                                    className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"

                                    placeholder="Heart/Cancer"
                                    {...register("campCategory")}
                                    title="Category"
                                />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-xm font-normal text-grayText">Description</h1>
                                <textarea
                                    placeholder="Description"
                                    {...register("campDetails")}
                                    className="w-full h-24 p-2 text-xm font-normal outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"

                                ></textarea>
                            </div>
                        </div>

                        {/* part two */}
                        <div className="w-full bg-white p-4 rounded-xl border border-borderColour space-y-5">

                            <div>
                                <h1 className="text-textDark text-lg font-medium">Camp Details</h1>
                            </div>

                            <div className="flex items-center gap-2">

                                <div className="space-y-2 w-full">
                                    <h1 className="text-xm font-normal text-grayText">Date</h1>
                                    <input
                                        type="date"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"

                                        placeholder="Date"
                                        {...register("campDate")}
                                        title="Date"
                                    />
                                </div>
                                <div className="space-y-2 w-full">
                                    <h1 className="text-xm font-normal text-grayText">Time</h1>
                                    <input
                                        type="time"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"

                                        placeholder="Time"
                                        {...register("campTime")}
                                        title="Time"
                                    />
                                </div>
                                <div className="space-y-2 w-full">
                                    <h1 className="text-xm font-normal text-grayText">Venue</h1>
                                    <input
                                        type="location"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText placeholder:text-xs"

                                        placeholder="ParkHoliday,Gulshan,Dhaka"
                                        {...register("campVenue")}
                                        title="Venue"
                                    />
                                </div>

                            </div>
                        </div>
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
                                        {...register("campGender")}
                                        title="Gender"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="w-auto flex-1 space-y-5">

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
                                    <label className="w-44 flex items-center gap-2 px-3 py-2 text-xm font-normal text-white bg-btnColor rounded-xl cursor-pointer" htmlFor="campImageUpload">
                                        <span>
                                            <LuUpload className="text-[16px]" />
                                        </span>
                                        <input type="file" name="campImageFile" className="text-white hidden" id="campImageUpload" {...register("campImage")} />
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

                        {/* part two */}
                        {/* <div className="w-full bg-white p-4 rounded-xl border border-borderColour space-y-5">

                            <div>
                                <h1 className="text-textDark text-lg font-medium">Target Group</h1>
                            </div>

                            <div className="flex items-center gap-2">

                                <div className="space-y-2 w-full">
                                    <h1 className="text-xm font-normal text-grayText">Age</h1>
                                    <input
                                        type="age"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText placeholder:text-xs"

                                        placeholder="25-40/Adult/Child/Older"
                                        {...register("campAge")}
                                        title="Age"
                                    />
                                </div>
                                <div className="space-y-2 w-full">
                                    <h1 className="text-xm font-normal text-grayText">Gender</h1>
                                    <input
                                        type="gender"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        placeholder="Male/Female"
                                        {...register("campGender")}
                                        title="Gender"
                                    />
                                </div>

                            </div>
                        </div> */}

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

                                        placeholder="200 BDT"
                                        {...register("campFee")}
                                        title="Enrollment Fee"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}

export default CreateCamp
