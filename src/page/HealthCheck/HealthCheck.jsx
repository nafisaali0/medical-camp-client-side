import { useState } from "react";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import HomeTitle from "../../components/HomeTitle";
import BloodPressureCheck from "../BloodPressureCheck/BloodPressureCheck";


const HealthCheck = () => {

    const { register, handleSubmit, reset } = useForm();

    // state
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = (data) => {

        // console.log(data)
        console.log(data.weight, data.feet, data.inches)

        if (data.weight === 0 || data.feet === 0 || data.inches === 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Please Enter Valid weight and height",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            reset();
            let bmi = data.weight / Math.pow((data.feet * 0.3048) + (data.inches * 0.0254), 2)
            // console.log(bmi)
            setBmi(bmi.toFixed(2))

            // Logic for message
            if (bmi < 19) {
                setMessage('You are underweight')
            } else if (bmi >= 19 && bmi < 25) {
                setMessage('You are a healthy weight')
            } else {
                setMessage('You are overweight')
            }
        }
    }
    return (
        <>
            <div className="container p-4">
                <HomeTitle title={"Calculate Your BMI"}></HomeTitle>
                <div className="my-20">
                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
                                Weight (kg):
                            </label>
                            <input
                                {...register("weight")}
                                type="number"
                                id="weight"
                                name="weight"
                                className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:shadow-outline-blue"
                                placeholder="Enter your weight"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feet">
                                Height:
                            </label>
                        </div>
                        <div className="mb-4 flex">
                            <div className="w-1/2 pr-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feet">
                                    feet :
                                </label>
                                <input
                                    {...register("feet")}
                                    type="number"
                                    id="feet"
                                    name="feet"
                                    className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:shadow-outline-blue"
                                    placeholder="Enter feet"
                                    required
                                />
                            </div>
                            <div className="w-1/2 pl-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inches">
                                    inches :
                                </label>
                                <input
                                    {...register("inches", { required: true })}
                                    type="number"
                                    id="inches"
                                    name="inches"
                                    className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:shadow-outline-blue"
                                    placeholder="Enter inches"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-500 to-indigo-800 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                        >
                            Calculate BMI
                        </button>
                        <div className="text-lg font-semibold my-10">
                            <p>Your BMI is <span className="text-blue-500">{bmi}  KG/M<sup>2</sup></span></p>
                            <p>{message}</p>
                        </div>
                    </form>
                    <div className="my-10">
                        {/* <h1 className="text-2xl font-bold">Monitor Daily Health Based On Your Blood Pressure</h1>
                        <Link to={"/bloodPressureCheck"}><button className="my-5 bg-gradient-to-r from-blue-500 to-indigo-800 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Click It</button></Link> */}
                        <BloodPressureCheck></BloodPressureCheck>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HealthCheck;