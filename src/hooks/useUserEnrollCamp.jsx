import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxioslocalhost from "./useAxioslocalhost";


const useUserEnrollCamp = () => {
    const { user } = useAuth();
    const axiosLocalhost = useAxioslocalhost()
    const { refetch, data: userEnrollCamp = [], isPending: loading } = useQuery({
        queryKey: ['userEnrollCamp', user?.email],
        queryFn: async () => {
            const res = await axiosLocalhost.get(`/enrollCamp?email=${user?.email}`)
            return res.data
        }
    })
    return [userEnrollCamp, refetch, loading]
}

export default useUserEnrollCamp;