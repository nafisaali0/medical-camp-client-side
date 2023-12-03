import { useQuery } from "@tanstack/react-query";
import useAxioslocalhost from "./useAxioslocalhost";
import useAuth from "./useAuth";

const useUsers = () => {

    const axiosLocalhost = useAxioslocalhost()
    const { user } = useAuth();
    const { refetch, data: users = [], isPending: loading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosLocalhost.get(`/users?email=${user.email}`);
            return res.data;
        }
    })
    return [users, refetch, loading]
};

export default useUsers;