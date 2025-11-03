import { MdLibraryAddCheck } from "react-icons/md"
import { SiBasecamp } from "react-icons/si"


const CreateCamp = () => {

    return (
        <>
            <form>
                {/* part one */}
                <div className="bg-white p-4 rounded-xl">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <SiBasecamp className="text-[22px]" />
                            <h1 className="text-textDark text-lg font-medium">Add A New Camp</h1>
                        </div>
                        <div>
                            <button className="flex items-center gap-2 px-3 py-2 text-lg font-medium text-white bg-btnColor rounded-xl cursor-pointer">
                                <span>
                                    <MdLibraryAddCheck className="text-[20px]" />
                                </span>
                                Create
                            </button>
                        </div>
                    </div>
                </div>
                {/* part two */}
                <div className="flex items-center gap-2 mt-5">
                    <div className="w-3/4 bg-white p-4 rounded-xl">
                        <div>
                            <h1 className="text-textDark text-lg font-medium">Add A New Camp</h1>
                        </div>
                        <div>
                            <h1>Camp Name</h1>
                        </div>
                        <div>
                            <h1>Services</h1>
                        </div>
                        <div>
                            <h1>Healthcare Professionals</h1>
                        </div>
                        <div>
                            <h1>Description</h1>
                        </div>
                    </div>
                    <div className="w-1/4 bg-white">
                        <div>
                            <h1>image</h1>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CreateCamp
