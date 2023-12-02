import { useLoaderData } from "react-router-dom";

const DetailCamp = () => {

    const { image, campName, targetAudience, date, venue, shortDescription, longDescription } = useLoaderData();

    return (
        <div>
            <div className=" max-w-5xl mx-auto overflow-hidden my-10 p-3">
                <div className="">
                    <div className="text-4xl font-bold">
                        <h1>{campName}</h1>
                    </div>

                    <div className="flex justify-between items-center border-b-2 border-[#e7e7e9] drop-shadow-sm">
                        <div>
                            <span className='px-3 py-2 bg-[#5b608b] text-xs text-white font-semibold rounded-lg'>{date}</span>
                            <span className='px-3 py-2 bg-[#5b608b] text-xs text-white font-semibold rounded-lg mx-4'>Venue: {venue}</span>
                            <span className='px-3 py-2 bg-[#5b608b] text-xs text-white font-semibold rounded-lg'>Target Audience: {targetAudience}</span>
                        </div>
                        <div className="flex gap-5 my-5">
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn text-white bg-gradient-to-r from-blue-500 to-indigo-800" onClick={() => document.getElementById('my_modal_4').showModal()}>Register</button>
                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Click the button below to close</p>
                                    <div className="modal-action">
                                        <button className="btn">Confirm Register</button>
                                        <form method="dialog">
                                            {/* if there is a button, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    <div className="my-5">
                        <img className="w-full h-full" src={image} alt="blog_image" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Introduction</h1>
                        <p className="text-lg my-5">{shortDescription}</p>
                        <h1 className="text-3xl font-bold">Details</h1>
                        <p className="text-lg my-5">{longDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCamp;