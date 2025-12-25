import useCamp from "../../../../hooks/useCamp";
import ShowTodayCamp from "./ShowTodayCamp";


const TodayCamp = () => {

    const [camp, loading, refetch] = useCamp();

    return (
        <>
            <ShowTodayCamp
                camp={camp}
                loading={loading}
                refetch={refetch} />
        </>
    )
}

export default TodayCamp
