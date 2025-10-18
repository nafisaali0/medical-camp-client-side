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

// import { useQuery } from "@tanstack/react-query";
// import useAxioslocalhost from "./useAxioslocalhost";

// const useCamp = () => {
//     const axiosLocalhost = useAxioslocalhost()
//     const {refetch, data: camp = [], isPending: loading  } = useQuery({
//         queryKey: ['camp'],
//         queryFn: async () => {
//             const res = await axiosLocalhost.get('/camp');
//             return res.data
//         }
//     })
//     // console.log('Refetch function:', refetch);
//     return [camp, loading , refetch]
// };

// export default useCamp;