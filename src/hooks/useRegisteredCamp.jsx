
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxioslocalhost from './useAxioslocalhost';

const useRegisteredCamp = () => {
    const { user } = useAuth();
    const axiosLocalhost = useAxioslocalhost()
    const { refetch, data: registeredCamp = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosLocalhost.get(`/registerCamps?email=${user.email}`)
            return res.data
        }
    })
    return [registeredCamp, refetch]
  
};

export default useRegisteredCamp;