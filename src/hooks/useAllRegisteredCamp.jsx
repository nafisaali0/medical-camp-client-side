import { useQuery } from "@tanstack/react-query";
import useAxioslocalhost from "./useAxioslocalhost";

const useAllRegisteredCamp = () => {
    const axiosLocalhost = useAxioslocalhost()
    const {refetch, data: allregisteredCamp = [], isPending: loading  } = useQuery({
        queryKey: ['allregisteredCamp'],
        queryFn: async () => {
            const res = await axiosLocalhost.get('/registerCamps');
            return res.data
        }
    })
    return [allregisteredCamp, loading , refetch]
};

export default useAllRegisteredCamp;