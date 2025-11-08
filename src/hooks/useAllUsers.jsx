
import { useQuery } from "@tanstack/react-query";
import useAxioslocalhost from './useAxioslocalhost';


const useAllUsers = () => {
    
    const axiosLocalhost = useAxioslocalhost()

    const { data: allUsers = [], isPending: loading, refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await axiosLocalhost?.get('/users');
            return res.data
        }
    })

    return [allUsers, loading, refetch]
}

export default useAllUsers