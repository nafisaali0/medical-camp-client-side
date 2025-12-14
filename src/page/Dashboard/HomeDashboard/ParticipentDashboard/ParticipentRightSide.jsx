import { useForm } from "react-hook-form"
import { CiCalendarDate } from "react-icons/ci"
import { MdOutlineUpdate } from "react-icons/md"
import useAxioslocalhost from "../../../../hooks/useAxioslocalhost"
import { useState } from "react"
import Swal from "sweetalert2"
import axios from "axios"

const ParticipentRightSide = ({ currentUser }) => {

    const { register, handleSubmit, reset } = useForm()
    const axiosLocalhost = useAxioslocalhost()

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const [getImage, setGetImage] = useState(currentUser?.userImage);

    const handleImage = async (e) => {

        const file = e.target.files[0]
        const formdata = new FormData();
        formdata.append("image", file)

        const res = await axios.post(image_hosting_api, formdata);

        if (res.data.success) {
            const userImage = res.data.data.display_url;
            setGetImage(userImage);

            const userInfo = {
                userImage: res.data.data.display_url,
            }
            console.log(userInfo)

            const updateImage = await axiosLocalhost.patch(`/users/${currentUser._id}`, userInfo)

            if (updateImage.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${currentUser?.userName} update your Image.`,
                    showConfirmButton: false,
                    timer: 2000
                });
            }

        } else {
            console.log("image not updated")
        }
    }

    const onSubmit = async (data) => {

        if (data) {

            const userInfo = {
                userPhone: data.userPhone,
                userGender: data.userGender,
                userAge: data.userAge,
                userAddress: data.userAddress,
            }
            // console.log(userInfo)
            const updateUserDetails = await axiosLocalhost.patch(`/users/${currentUser._id}`, userInfo);
            // console.log(updateUserDetails.data)

            reset();

            if (updateUserDetails.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${currentUser?.userName} update your information.`,
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }
    };

    return (
        <>
            <div className="flex gap-5 md:flex-row-reverse flex-col">
                <div className="flex-1 w-full h-fit bg-white p-5 rounded-xl shadow-lg mt-16 relative">
                    <div className="flex flex-col justify-center items-center text-center ">
                        <div className="-mt-14 flex justify-center items-center">
                            <figure>
                                <img
                                    src={getImage}
                                    alt=""
                                    className="w-full h-56 lg:w-56 rounded-xl" />
                            </figure>
                        </div>
                        <div>
                            <button
                                onChange={handleImage}
                                className="px-3 py-1 mt-3 bg-primarySemiDark text-textDark border border-primarySemiDark rounded-full">
                                <label htmlFor="fileUpload">
                                    <input type="file" name="imageFile" className="text-white hidden" id="fileUpload" />
                                    <p className="cursor-pointer">Change Image</p>
                                </label>
                            </button>
                        </div>
                        <div className="mt-2">
                            <h1 className="text-lg font-medium text-textDark">{currentUser?.userName}</h1>
                            <h1 className="text-sm font-normal text-grayText">{currentUser?.email}</h1>
                            <h1 className="text-sm font-normal text-grayText">{currentUser?.userRole}</h1>
                        </div>
                    </div>
                </div>

                <div className="flex-1  w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full p-4 space-y-1 bg-white rounded-xl shadow-lg mt-7">
                            <div className="bg-white p-4 rounded-xl space-y-5">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-textDark text-lg font-medium">Profile Details</h1>
                                    <button className="flex items-center gap-1 px-2 py-2 text-xm font-normal text-white bg-btnColor rounded-xl cursor-pointer">
                                        <span>
                                            <MdOutlineUpdate className="text-[18px]" />
                                        </span>
                                        Update
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-xm font-normal text-grayText">Phone Number</h1>
                                    <input
                                        type="number"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        required
                                        placeholder="Phone Number"
                                        {...register("userPhone")}
                                        defaultValue={currentUser?.userPhone}
                                        title="Phone Number"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-xm font-normal text-grayText">Gender</h1>
                                    <input
                                        type="text"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        required
                                        placeholder="Gender"
                                        defaultValue={currentUser?.userGender}
                                        {...register("userGender")}
                                        title="Gender"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-xm font-normal text-grayText">Age</h1>
                                    <input
                                        type="text"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        required
                                        placeholder="Age"
                                        defaultValue={currentUser?.userAge}
                                        {...register("userAge")}
                                        title="Age"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-xm font-normal text-grayText">Address</h1>
                                    <textarea
                                        placeholder="Address"
                                        defaultValue={currentUser?.userAddress}
                                        {...register("userAddress")}
                                        className="w-full h-24 p-2 text-xm font-normal outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        required></textarea>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <CiCalendarDate className="text-lg text-textDark" />
                                        <h1 className="text-lg font-medium text-textDark">Join</h1>
                                    </div>
                                    <div>
                                        <h1 className="text-lg font-medium text-grayText">{currentUser?.date}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default ParticipentRightSide;
