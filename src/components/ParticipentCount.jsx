import useAllEnrollCamp from "../hooks/useAllEnrollCamp";

const ParticipentCount = ({ enrollCampId }) => {

    const [allEnrollCamp] = useAllEnrollCamp();
    const result = allEnrollCamp.reduce((count, obj) => {
        if (obj?.enrollCampId === enrollCampId) {
            return count + 1;
        }
        return count;
    }, 0);

    return (
        <>
            {result}
        </>
    )
}

export default ParticipentCount
