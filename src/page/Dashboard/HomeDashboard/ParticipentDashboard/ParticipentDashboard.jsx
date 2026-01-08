import ShareHelmet from "../../../../components/ShareHelmet";
import useUsers from "../../../../hooks/useUsers";
import ParticipentLeftSide from "./ParticipentLeftSide";
import ParticipentRightSide from "./ParticipentRightSide";

const ParticipentDashboard = () => {

    const [users] = useUsers();
    const currentUser = users?.length > 0 ? users[0] : {};

    return (
        <>

            <ShareHelmet HelmetTitle="Participent Dashboard" />
            <ParticipentLeftSide currentUser={currentUser} />
            <ParticipentRightSide currentUser={currentUser} />
            
        </>
    )
}

export default ParticipentDashboard
