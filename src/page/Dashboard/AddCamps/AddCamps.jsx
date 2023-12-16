import { useForm } from "react-hook-form";
import DashboardTitle from "../../../components/DashboardTitle";
import Swal from "sweetalert2";
import useAxioslocalhost from "../../../hooks/useAxioslocalhost";
import { Helmet } from "react-helmet-async";

const AddCamps = () => {

    const { register, handleSubmit, reset } = useForm()
    const axiosLocalhost = useAxioslocalhost()

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


    const onSubmit = async (data) => {
        console.log(data)

        // image upload to imagbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosLocalhost.post(image_hostion_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        // console.log(res.data)
        if (res.data.success) {
            //now send the menu item to the server with the image url
            const campDetails = {
                image: res.data.data.display_url,
                campName: data.campName,
                services: data.services,
                healthcareProfessionals: data.healthcareProfessionals,
                targetAudience: data.targetAudience,
                campFees: parseFloat(data.campFees),
                date: data.date,
                time: data.time,
                venue: data.venue,
                // enroll: data.enroll,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription
            }
            const campRes = await axiosLocalhost.post('/camp', campDetails);
            // console.log(menuRes.data)
            if (campRes.data.insertedId) {
                //show success popup
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
    }

    return (
        <>
            <Helmet>
                <title>Amelia | AddCamps</title>
            </Helmet>
            <div>
                <DashboardTitle
                    heading={"Add New Camp"}>
                </DashboardTitle>
            </div>
            <div className="flex flex-col w-full mt-28">
                <div className="divider"></div>
            </div>
            <div className="container mx-auto mt-10">
                <div className="my-10">
                    <h1 className="text-3xl font-bold">Base Information</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex justify-end items-end my-5">
                            <button type="submit" className="text-blue-950 font-semibold border-4 border-blue-950 px-3 py-3 rounded-full">Publish Now</button>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-10">
                            <div className="flex flex-col gap-5 flex-1">
                                <input type="text"
                                    placeholder="Camp Name"
                                    {...register("campName")}
                                    className="input input-bordered w-full" />
                                <input type="text"
                                    placeholder="service"
                                    {...register("services")}
                                    className="input input-bordered w-full" />
                                <div className="flex items-center gap-5">
                                    <div className="flex-1 w-1/2">
                                        <input type="text"
                                            placeholder="Target Audience"
                                            {...register("targetAudience")}
                                            className="input input-bordered w-full" />
                                    </div>
                                    <div className="flex-1 w-1/2">
                                        <input type="text"
                                            placeholder="venue"
                                            {...register("venue")}
                                            className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <textarea placeholder="Healthcare Professionals"
                                    {...register("healthcareProfessionals")}
                                    className="textarea textarea-bordered textarea-lg w-full">
                                </textarea>
                                <input type="number"
                                    placeholder="Fees"
                                    {...register("campFees")}
                                    className="input input-bordered w-full" />
                            </div>
                            {/* 2nd flex */}
                            <div className="flex flex-col gap-5 flex-1">
                                <input type="file"
                                    {...register("image")}
                                    className="input input-bordered w-full" />
                                <input type="date"
                                    placeholder="Date"
                                    {...register("date")}
                                    className="input input-bordered w-full" />
                                    <input type="text"
                                            placeholder="Time"
                                            {...register("time")}
                                            className="input input-bordered w-full" />
                                {/* <div className="flex items-center gap-5">
                                    <div className="flex-1 w-1/2">
                                        <input type="date"
                                            placeholder="Date"
                                            {...register("date")}
                                            className="input input-bordered w-full max-w-2xl" />
                                    </div>
                                    <div className="flex-1 w-1/2">
                                        <input type="text"
                                            placeholder="Time"
                                            {...register("time")}
                                            className="input input-bordered w-full" />
                                    </div>
                                </div> */}
                                {/* <input type="number"
                                    placeholder="Enroll Amount"
                                    {...register("enroll")}
                                    className="input input-bordered w-full" /> */}
                                <input type="text"
                                    placeholder="Short Description"
                                    {...register("shortDescription")}
                                    className="input input-bordered w-full" />
                                <textarea placeholder="Details"
                                    {...register("longDescription")}
                                    className="textarea textarea-bordered textarea-lg w-full" >
                                </textarea>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default AddCamps;