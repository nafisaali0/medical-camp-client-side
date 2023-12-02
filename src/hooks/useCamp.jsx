import { useQuery } from "@tanstack/react-query";
import useAxioslocalhost from "./useAxioslocalhost";

const useCamp = () => {
    const axiosLocalhost = useAxioslocalhost()
    const { data: camp = [], isPending: loading, refetch } = useQuery({
        queryKey: ['camp'],
        queryFn: async () => {
            const res = await axiosLocalhost.get('/camp');
            return res.data
        }
    })

    return [camp, loading , refetch]
};

export default useCamp;