import useUsers from "../../../../hooks/useUsers";
import ParticipentLeftSide from "./ParticipentLeftSide";
import ParticipentRightSide from "./ParticipentRightSide";

const ParticipentDashboard = () => {

    const [users] = useUsers();
    const currentUser = users?.length > 0 ? users[0] : {};

    return (
        <>
            <div className="flex flex-col xl:flex-row gap-5 xl:justify-between">
                <ParticipentLeftSide currentUser={currentUser} />
                <ParticipentRightSide currentUser={currentUser} />
            </div>
        </>
    )
}

export default ParticipentDashboard
