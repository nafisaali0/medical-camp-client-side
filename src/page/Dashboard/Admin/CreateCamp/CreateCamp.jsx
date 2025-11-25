import { useForm } from "react-hook-form"
import { LuUpload } from "react-icons/lu"
import { MdLibraryAddCheck } from "react-icons/md"
import { SiBasecamp } from "react-icons/si"
import Swal from "sweetalert2"
import useAxioslocalhost from "../../../../hooks/useAxioslocalhost"
import { useState } from "react"


const CreateCamp = () => {

    const axiosLocalhost = useAxioslocalhost()
    const { register, handleSubmit, reset } = useForm()

    // image api
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const [getImage, setGetImage] = useState(null);

    const handleImage = async (e) => {
        console.log(e.target.files)
        setGetImage(URL.createObjectURL(e.target.files[0]))
    }

    const onSubmit = async (data) => {
        console.log(data)

        // image upload to imagbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosLocalhost.post(image_hostion_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            //now send the menu item to the server with the image url
            const campDetails = {
                image: res.data.data.display_url,
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
            const campRes = await axiosLocalhost.post('/camp', campDetails);

            if (campRes.data.insertedId) {

                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Added camp successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        //-------------new-------------


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
                    <div className="w-auto lg:w-[700px] space-y-5">

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
                                    required
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
                                        required
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
                                        required
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
                                        required
                                        placeholder="ParkHoliday,Gulshan,Dhaka"
                                        {...register("campVenue")}
                                        title="Venue"
                                    />
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* right side */}
                    <div className="w-auto flex-1 space-y-5">

                        {/* part one */}
                        <div className="p-4 w-full bg-white rounded-xl">
                            <div>
                                <h1 className="text-textDark text-lg font-medium">Camp Media</h1>
                            </div>
                            <div className="mt-5">
                                <h1 className="text-xm font-normal text-grayText mb-2">Image</h1>
                                <div className="w-full h-60 border-2 border-dashed border-borderColour">
                                    <img src={getImage} alt="" className="w-full h-full" />
                                </div>
                                {/* {...register("campImage")} */}
                                <div className="mt-5" onChange={handleImage}>
                                    <label className="w-44 flex items-center gap-2 px-3 py-2 text-xm font-normal text-white bg-btnColor rounded-xl cursor-pointer" htmlFor="fileUpload">
                                        <span>
                                            <LuUpload className="text-[16px]" />
                                        </span>
                                        <input type="file" name="imageFile" className="text-white hidden" id="fileUpload" />
                                        <span>Upload Image</span>
                                    </label>
                                    {/* {...register("campImage")} */}
                                </div>
                            </div>
                        </div>

                        {/* part two */}
                        <div className="w-full bg-white p-4 rounded-xl border border-borderColour space-y-5">

                            <div>
                                <h1 className="text-textDark text-lg font-medium">Target Group</h1>
                            </div>

                            <div className="flex items-center gap-2">

                                <div className="space-y-2 w-full">
                                    <h1 className="text-xm font-normal text-grayText">Age</h1>
                                    <input
                                        type="age"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText placeholder:text-xs"
                                        required
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
