import useCamp from "../../../../hooks/useCamp";
import useUsers from "../../../../hooks/useUsers";
import ShowTodayCamp from "./ShowTodayCamp";


const TodayCamp = () => {

    const [users] = useUsers();
    const currentUser = users?.length > 0 ? users[0] : {};
    const [camp, loading, refetch] = useCamp();

    return (
        <>
            {
                currentUser?.userRole === "Admin" ?
                    <ShowTodayCamp
                        camp={camp}
                        loading={loading}
                        refetch={refetch} />
                    :
                    currentUser?.userRole === "Participant" ?
                        <ShowTodayCamp
                            camp={camp}
                            loading={loading}
                            refetch={refetch} />
                        : <></>
            }
        </>
    )
}

export default TodayCamp
