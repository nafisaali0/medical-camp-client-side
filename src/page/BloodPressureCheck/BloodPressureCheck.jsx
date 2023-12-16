import { useForm } from "react-hook-form";
import HomeTitle from "../../components/HomeTitle";
import { useState } from "react";
// import HealthChart from "../HealthCheck/HealthChart";
import Swal from "sweetalert2";
import chartImage from '../../assets/images/camp/chart1.jpg'
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import useAxioslocalhost from "../../hooks/useAxioslocalhost";
import HealthChart from "./HealthChart";



const BloodPressureCheck = () => {

    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    // state
    const [message, setMessage] = useState('')
    const [readingChartImage, setReadingChartImage] = useState();
    const axiosLocalhost = useAxioslocalhost()

    const onSubmit = (data) => {

        // console.log(data)
        // console.log(data.Systolic, data.Diastolic)

        const readingData = {
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
            systolic: data.Systolic,
            diastolic: data.Diastolic,
            date: moment().format("MMM Do YY"),
            time: moment().format('LT')
        }
        console.log(readingData)
        // post new data to db 
        axiosLocalhost.post('/bloodPressure', readingData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your data has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


        // logic 
        if (data.Systolic === 0 || data.Diastolic === 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Please Enter Your Blood Pressure Reading",
                showConfirmButton: false,
                timer: 1500
            });
        } else {

            reset();

            // Logic for message
            if (data.Systolic <= 90 && data.Diastolic <= 60) {
                setMessage(`${data.Systolic}/${data.Diastolic} Your blood pressure reading is Low`)
                setReadingChartImage(chartImage)
            } else if (data.Systolic <= 120 && data.Diastolic <= 80) {
                setMessage(`${data.Systolic}/${data.Diastolic} Your blood pressure reading is normal`)
                setReadingChartImage(chartImage)

            } else if (data.Systolic <= 140 && data.Diastolic <= 90) {
                setMessage(`${data.Systolic}/${data.Diastolic} Your blood pressure reading is high`)
                setReadingChartImage(chartImage)
            } else {
                setMessage(`${data.Systolic}/${data.Diastolic} Your blood pressure reading is  Very high`)
                setReadingChartImage(chartImage)
            }
        }
    }

    return (
        <>
            <div className="container p-4">
                <HomeTitle title={"Monitor your Blood Pressure's Reading"}></HomeTitle>
                <div className="my-20">
                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex gap-20">
                            <div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feet">
                                        Enter your reading
                                    </label>
                                </div>
                                <div className="mb-4 flex">
                                    <div className="w-1/2 pr-2">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feet">
                                            Systolic(Upper) :
                                        </label>
                                        <input
                                            {...register("Systolic")}
                                            type="number"
                                            id="Systolic"
                                            name="Systolic"
                                            className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:shadow-outline-blue"
                                            placeholder="Enter your Systolic"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/2 pl-2">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inches">
                                            Diastolic(Lower) :
                                        </label>
                                        <input
                                            {...register("Diastolic")}
                                            type="number"
                                            id="Diastolic"
                                            name="Diastolic"
                                            className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:shadow-outline-blue"
                                            placeholder="Enter Diastolic"
                                            required
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-blue-500 to-indigo-800 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                                >
                                    Submit Reading
                                </button>
                            </div>
                            <div className="text-lg font-semibold">
                                <p className="my-5">{message}</p>
                                <img src={readingChartImage} alt="" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="my-20">
                    <HealthChart></HealthChart>
                </div>
            </div>
        </>
    );
};

export default BloodPressureCheck;