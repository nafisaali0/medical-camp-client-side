import axios from "axios";


const axiosLocalhost = axios.create({
    baseURL: 'https://medical-camp-server-seven.vercel.app'
})


const useAxioslocalhost = () => {
    return axiosLocalhost;
};

export default useAxioslocalhost;