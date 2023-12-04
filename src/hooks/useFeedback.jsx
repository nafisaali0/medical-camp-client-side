import { useQuery } from "@tanstack/react-query";
import useAxioslocalhost from "./useAxioslocalhost";


const useFeedback = () => {
    const axiosLocalhost = useAxioslocalhost()
    const { refetch, data: feedbacks = [], isPending: loading } = useQuery({
        queryKey: ['feedbacks'],
        queryFn: async () => {
            const res = await axiosLocalhost.get('/feedbacks');
            return res.data
        }
    })
    // console.log('Refetch function:', refetch);
    return [feedbacks, loading, refetch]
};

export default useFeedback;