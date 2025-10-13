import { useForm } from "react-hook-form";
// import contactImage from '../../assets/images/newBanner/contact2.jpg'
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    const [emailInput, setEmailInput] = useState(" ")

    const { register, handleSubmit } = useForm();//from react hook
    const onSubmit = (data) => {
        console.log(data)
        setEmailInput(data)

        if (emailInput) {
            return (
                Swal.fire(
                    'Thank You For Contact!'
                )
            )
        }

    }
    return (
        <div>
            <Helmet>
                <title>Amelia | Contact</title>
            </Helmet>
            <div className="container mx-auto my-20 overflow-hidden">
                <div className=" bg-gray-100 drop-shadow-2xl py-10">
                    <div className="flex justify-start items-start ml-10">
                        <h1 className="text-4xl font-bold ">Contuct Us</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 items-center my-10">

                        <div className="flex-1 w-full">
                            <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                                    <input type="name" {...register("name")} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Name"></input>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" {...register("email")} placeholder="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required></input>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                                    <textarea type="text" {...register("message")} placeholder="Write Your Query" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></textarea>
                                </div>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send Massage</button>
                            </form>
                        </div>
                        {/* <div className="flex-1 w-full p-10">
                            <img src={contactImage} className="w-full" alt="" />
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;