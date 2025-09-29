import axios from "axios";

const axiosLocalhost = axios.create({
    baseURL: 'https://medical-camp-server-seven.vercel.app'
    // baseURL: 'http://localhost:5000'
})


const useAxioslocalhost = () => {
    return axiosLocalhost;
};

export default useAxioslocalhost;