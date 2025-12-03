import { useQuery } from "@tanstack/react-query";
import useAxioslocalhost from "./useAxioslocalhost";

const useAllEnrollCamp = () => {

    const axiosLocalhost = useAxioslocalhost()
    const { refetch, data: allEnrollCamp = [], isPending: loading } = useQuery({
        queryKey: ['allEnrollCamp'],
        queryFn: async () => {
            const res = await axiosLocalhost.get('/enrollCamp');
            return res.data
        }
    })
    return [allEnrollCamp, loading, refetch]
    
}

export default useAllEnrollCamp
