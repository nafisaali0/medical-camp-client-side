import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxioslocalhost from './useAxioslocalhost';

const usePayment = () => {

    const { user } = useAuth();
    const axiosLocalhost = useAxioslocalhost()
    const { refetch, data: paymentsCamp = [], isPending: loading } = useQuery({
        queryKey: ['paymentsCamp', user?.email],
        queryFn: async () => {
            const res = await axiosLocalhost.get(`/payments?email=${user.email}`)
            // https://medical-camp-server-seven.vercel.app/payments?email=nafisaali20006@gmail.com
            return res.data
        }
    })
    return [paymentsCamp, refetch, loading]

};

export default usePayment;