import { useEffect, useState } from "react";
import useAllEnrollCamp from "./useAllEnrollCamp";

const useUniqueEnrollCamp = () => {
    
    const [allEnrollCamp] = useAllEnrollCamp();
    const [popularCamp, setPopularCamp] = useState([]);

    useEffect(() => {

        if (!allEnrollCamp) return;
        const copyCamp = [...allEnrollCamp];

        const sorting = copyCamp.sort(function (a, b) {
            return parseFloat(b.enrollCampId) - parseFloat(a.enrollCampId);
        })
        const uniqueEnrollCamp = sorting.filter((obj, index, enrollCampID) =>
            index === enrollCampID.findIndex((t) => (
                t.enrollCampId === obj.enrollCampId
            ))

        );

        setPopularCamp(uniqueEnrollCamp)

    }, [allEnrollCamp]);

    return { popularCamp }
}

export default useUniqueEnrollCamp;



