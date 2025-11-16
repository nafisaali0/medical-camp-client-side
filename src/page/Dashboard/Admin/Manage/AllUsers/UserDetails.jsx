import { LuView } from "react-icons/lu"
// import useAllUsers from "../../../../../hooks/useAllUsers";

const UserDetails = ({ userInfo }) => {
    console.log(userInfo)
    return (
        <>
            {/* The button to open modal */}
            <label htmlFor="my_modal_6"><LuView title="View Details" className="cursor-pointer" /></label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="flex flex-col justify-center items-center">
                        <figure>
                            <img
                                src={userInfo?.photo}
                                alt=""
                                className="rounded-xl  my-3" />
                        </figure>
                        <div>
                            <h1 className="text-lg font-medium text-textDark">{userInfo?.name}</h1>
                            <h1 className="text-sm font-normal text-grayText">{userInfo?.role}</h1>
                        </div>
                    </div>
                    <div className="border border-borderColour my-3"></div>
                    <div className="max-w-md mx-auto py-5 space-y-1">
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg font-medium text-textDark">Phone Number: </h1>
                            <h1 className="text-sm font-normal text-grayText">01880857540</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg font-medium text-textDark">Gender: </h1>
                            <h1 className="text-sm font-normal text-grayText">Nafisa Ali</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg font-medium text-textDark">Age: </h1>
                            <h1 className="text-sm font-normal text-grayText">Nafisa Ali</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg font-medium text-textDark">Address: </h1>
                            <h1 className="text-sm font-normal text-grayText">Nafisa Ali</h1>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="px-2 py-2 text-lg primaryBtn cursor-pointer">Close!</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetails
