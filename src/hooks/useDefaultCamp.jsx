import { useEffect, useState } from "react";
import useCamp from "./useCamp";


const useDefaultCamp = () => {

    const [camp] = useCamp();          // server data
    const [defaultCamp, setDefaultCamp] = useState([]);

    useEffect(() => {
        if (camp?.length > 0) {
            setDefaultCamp(camp);
        }
    }, [camp]);

    return { defaultCamp, setDefaultCamp };
}

export default useDefaultCamp
